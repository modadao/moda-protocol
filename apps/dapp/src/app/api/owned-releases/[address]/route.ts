import { getEvmApi } from '@/utils/evmApi';
import { getChainInfo } from '@/utils/getChainInfo';
import { EvmAddressInput, EvmChain } from '@moralisweb3/common-evm-utils';
import { Addresses } from 'drop-sdk';

interface Params {
  params: { address: string };
}

export async function GET(_request: Request, { params }: Params) {
  const evmApi = await getEvmApi();
  const chainInfo = getChainInfo();

  const chain = chainInfo.isTestnet ? EvmChain.MUMBAI : EvmChain.POLYGON;

  const releasesAddress = chainInfo.isTestnet
    ? (Addresses.Examples.OpenReleases.mumbai as EvmAddressInput)
    : '';

  try {
    const response = await evmApi.nft.getWalletNFTs({
      chain,
      format: 'decimal',
      tokenAddresses: [releasesAddress],
      mediaItems: false,
      address: params.address as EvmAddressInput,
    });

    const releases = response.result.map((release) => {
      return {
        amountOwned: release.amount,
        releaseId: release.tokenId,
        releaseUri: release.tokenUri,
      };
    });
    return new Response(JSON.stringify(releases));
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify(e), { status: 400 });
  }
}
