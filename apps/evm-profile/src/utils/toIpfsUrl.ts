/** Convert an IPFS CID uri, such as ipfs://<CID>, to a url. e.g. 'https://ipfs.io/ipfs/<CID>' */
export const toIpfsUrl = (uri: string | undefined): string =>
  uri?.match(/^ipfs:\/\/.+/)
    ? `https://ipfs.io/ipfs/${uri.split('ipfs://')[1]}`
    : uri || '';
