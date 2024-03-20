import Profile from '@/components/User/Profile/Profile';

interface ProfilePageProps {
  params: { address: string };
}

export default function ProfilePage({ params }: ProfilePageProps) {
  return (
    <div className="w-full">
      <Profile address={params.address} />
    </div>
  );
}
