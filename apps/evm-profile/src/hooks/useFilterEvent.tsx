import { ProfileAddresses, profileAbi } from 'profile';
import { useEffect } from 'react';
import { parseAbiItem } from 'viem';
import { useAccount, usePublicClient } from 'wagmi';

export const useFilterEvent = () => {
  const client = usePublicClient();
  const { address } = useAccount();
  console.log(ProfileAddresses.mumbai);

  useEffect(() => {
    const getEvents = async () => {
      const filter = await client.createEventFilter({
        address: ProfileAddresses.mumbai as `0x${string}`,
        event: parseAbiItem(
          'event ProfileChangedFor(address indexed kontract, address indexed caller)',
        ),
      });

      const events = await client.getFilterChanges({ filter });

      console.log('events', events);
    };
    getEvents();
  }, [client]);
};
