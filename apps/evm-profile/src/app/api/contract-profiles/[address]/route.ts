import { getChainInfo } from '@/utils/getChainInfo';
import { EvmAbiItem, EvmChain } from '@moralisweb3/common-evm-utils';
import Moralis from 'moralis';
import { ProfileAddresses } from 'profile';

const apiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY || '';

Moralis.start({
  apiKey,
});

interface Params {
  params: { address: string };
}

interface ProfileChangedFor {
  kontract: string;
  caller: string;
}

interface ResponseJson {
  transaction_hash: string;
  address: string;
  block_timestamp: string;
  block_number: string;
  block_hash: string;
  data: ProfileChangedFor;
}

export async function GET(_request: Request, { params }: Params) {
  const chainInfo = getChainInfo();

  const chain = chainInfo.isTestnet ? EvmChain.MUMBAI : EvmChain.POLYGON;

  const topic =
    '0x851e62abe600e90c07bdd93b1db315b32f32d4845f6cc42b28e6f1acb458eaee';

  const abi: EvmAbiItem = {
    type: 'event',
    name: 'ProfileChangedFor',
    inputs: [
      {
        name: 'kontract',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'caller',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  };

  const response = await Moralis.EvmApi.events.getContractEvents({
    address: ProfileAddresses.mumbai,
    chain,
    topic,
    abi,
  });

  const responses: ResponseJson[] = response.toJSON().result as ResponseJson[];

  const events = responses.map((event) => {
    return event.data;
  });

  const filteredEvents = events.filter((event) => {
    return event.caller.toLowerCase() === params.address.toLowerCase();
  });

  const contractAddresses = filteredEvents.map((event) => {
    return event.kontract;
  });

  const uniqueContractAddressesSet = new Set(contractAddresses);
  const uniqueContractAddresses = Array.from(uniqueContractAddressesSet);

  return new Response(JSON.stringify(uniqueContractAddresses));
}
