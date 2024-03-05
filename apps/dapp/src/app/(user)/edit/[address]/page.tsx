import EditProfile from '@/components/User/Profile/Edit/EditProfile';

export interface EditPageProps {
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
  const isContract = searchParams.isContract === 'true';

  return (
    <div className="relative">
      <EditProfile address={params.address} isContract={isContract} />
    </div>
  );
}
