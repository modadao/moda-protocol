import type { FanType } from '@/types';
import { SingleFan } from './SingleFan';

export const ReleaseFans = ({ fans }: { fans: FanType[] }) => {
  return (
    <section className="space-y-4 md:space-y-6 w-full p-4 mt-12">
      <div className="flex flex-col gap-2 divide-y w-full">
        <h1 className="m-auto font-bold italic text-xl">Fans</h1>
        <div className="flex flex-wrap justify-center pt-2">
          {fans.map((fan, index) => {
            const { username, profileImage, web3Address } = fan;
            return (
              <SingleFan
                username={username}
                profileImage={profileImage}
                web3Address={web3Address}
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
