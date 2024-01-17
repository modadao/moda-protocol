import { useGetProfileData } from '@/hooks/useGetProfileData';
import SocialLinks from './SocialLinks';

interface ProfileContentProps {
  address: string;
}

export default function ProfileContent({ address }: ProfileContentProps) {
  const { profileData } = useGetProfileData(address);
  return (
    <div className="w-full flex flex-col items-center justify-center mt-6 gap-6  ">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-5xl italic font-extrabold">{profileData.name}</h1>
        <SocialLinks
          spotify={profileData.profile.spotify}
          twitter={profileData.profile.twitter}
          instagram={profileData.profile.instagram}
        />
      </div>
      <p className="text-lg w-2/3 whitespace-pre-line ">
        {profileData.description}
      </p>
    </div>
  );
}
