import EditProfile from '@/components/Profile/Edit/EditProfile';

interface EditPageProps {
  params: {
    address: string;
  };
  searchParams: {
    isContract: string;
  };
}

export default function EditProfilePage({
  params,
  searchParams,
}: EditPageProps) {
  const isContract = searchParams.isContract === 'true' ? true : false;
  return (
    <div className="relative">
      <EditProfile address={params.address} isContract={isContract} />
    </div>
  );
}
