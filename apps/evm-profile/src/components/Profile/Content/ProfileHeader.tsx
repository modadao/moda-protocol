import { useGetProfileData } from '@/hooks/useGetProfileData';
import Image from 'next/image';

interface ProfileHeaderProps {
  address: string;
}

export default function ProfileHeader({ address }: ProfileHeaderProps) {
  const { profileData } = useGetProfileData(address);

  return (
    <div className="w-full h-[220px] flex flex-col justify-center items-center relative mt-8">
      <div className="w-full h-[220px] absolute">
        <Image
          className=""
          src={profileData.profile.banner}
          alt=""
          objectFit="cover"
          fill={true}
        />
      </div>
      <div className="flex justify-center items-center w-[200px] h-[200px] absolute">
        <Image
          className="rounded-full object-cover"
          src={profileData.image}
          alt=""
          width="200"
          height="200"
        />
      </div>
    </div>
  );
}
