import Moralis from 'moralis';

const apiKey = process.env.NEXT_PUBLIC_MORALIS_API_KEY || '';

export const getEvmApi = async () => {
  if (!Moralis.Core.isStarted) {
    await Moralis.start({
      apiKey,
    });
  }

  return Moralis.EvmApi;
};
