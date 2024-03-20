import { getChainInfo } from '@/utils';
import {
  EvmAbiItem,
  EvmAddressInput,
  EvmChain,
} from '@moralisweb3/common-evm-utils';
import { Addresses } from 'drop-sdk';
import Moralis from 'moralis';

const apiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY || '';

Moralis.start({
  apiKey,
});

interface Params {
  params: { address: string };
}

interface TrackRegistered {
  trackRegistrationHash: string;
  trackId: string;
  trackOwner: string;
}

interface TrackRegisteredResponseJson {
  transaction_hash: string;
  address: string;
  block_timestamp: string;
  block_number: string;
  block_hash: string;
  data: TrackRegistered;
}
export async function GET(_request: Request, { params }: Params) {
  const address = Addresses.Examples.Catalog.mumbai as EvmAddressInput;

  const chainInfo = getChainInfo();

  const chain = chainInfo.isTestnet ? EvmChain.MUMBAI : EvmChain.POLYGON;

  const topic =
    '0x2a8ca0ae0939f472e8138500e93789b904cfd5c773233ce70a80838abe7b6b29';

  const abi: EvmAbiItem = {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'trackRegistrationHash',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'trackId',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'trackOwner',
        type: 'address',
      },
    ],
    name: 'TrackRegistered',
    type: 'event',
  };

  const response = await Moralis.EvmApi.events.getContractEvents({
    address,
    chain,
    topic,
    abi,
  });

  const responses: TrackRegisteredResponseJson[] = response.toJSON()
    .result as TrackRegisteredResponseJson[];

  const events = responses.map((event) => {
    return event.data;
  });

  const filteredEvents = events.filter((event) => {
    return event.trackOwner.toLowerCase() === params.address.toLowerCase();
  });

  const registeredTracks = filteredEvents.map((event) => {
    return {
      trackUri: event.trackRegistrationHash,
      trackId: event.trackId,
    };
  });

  return new Response(JSON.stringify(registeredTracks));
}
