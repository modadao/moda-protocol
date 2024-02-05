import { useProfileState } from '@/hooks/profile/useProfileState';
import SocialLinks from './SocialLinks';

export default function ProfileContent() {
  const { account: profile } = useProfileState();
  const p = profile.profile || {};

  return (
    <div className="w-full flex flex-col items-center justify-center mt-6 gap-6  ">
      <div className="flex flex-col gap-2 items-center">
        {p.name && <h1 className="text-5xl italic font-extrabold">{p.name}</h1>}
        <SocialLinks {...p.profile} />
      </div>
      {p.description && (
        <p className="max-w-3xl mx-auto p-3 text-lg whitespace-pre-line ">
          {p.description}
        </p>
      )}
    </div>
  );
}
