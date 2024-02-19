import Search from '@/components/Profile/Search';

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center  mt-40">
      <h1 className="text-9xl font-extrabold italic">EVM Profile</h1>
      <Search />
    </div>
  );
}
