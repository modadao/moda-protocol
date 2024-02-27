const profileAddress = () => {
  const address = process.env.NEXT_PUBLIC_PROFILE_ADDRESS;
  if (!address) throw Error('NEXT_PUBLIC_PROFILE_ADDRESS is not set');

  return address;
};

export const Config = {
  profileAddress: profileAddress(),
};
