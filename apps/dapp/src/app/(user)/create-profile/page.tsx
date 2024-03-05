import CreateProfile from '@/components/User/Profile/Create/CreateProfile';

export default function CreateProfilePage({
  searchParams,
}: { searchParams: { isContract: string } }) {
  const isContract = searchParams.isContract === 'true' ? true : false;
  return (
    <div>
      <CreateProfile isContract={isContract} />
    </div>
  );
}
