interface ChainInfo {
  chainName: string;
  tokenSymbol: string;
  isTestnet: boolean;
}

export const getChainInfo = (): ChainInfo => {
  switch (process.env.NEXT_PUBLIC_CHAIN_ID) {
    case '137': {
      return {
        chainName: 'Polygon',
        tokenSymbol: 'MATIC',
        isTestnet: false,
      };
    }
    case '80001': {
      return {
        chainName: 'Mumbai',
        tokenSymbol: 'MATIC',
        isTestnet: true,
      };
    }
    default: {
      throw new Error('Unsupported chain id');
    }
  }
};
