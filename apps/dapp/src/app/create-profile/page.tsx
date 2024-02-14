import CreateProfile from '@/components/Profile/Create/CreateProfile';

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
