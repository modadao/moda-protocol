import Link from 'next/link';

export default function DashboardLinks() {
  return (
    <div className="flex flex-row items-center justify-start gap-6">
      <Link className="font-extrabold text-3xl italic " href={'/'}>
        STUDIO
      </Link>
      <div className=" flex flex-row justify-center gap-6 font-extrabold text-base italic">
        <Link href={'/dashboard'}>Dashboard</Link>
        <Link href={'/tracks'}>Tracks</Link>
      </div>
    </div>
  );
}
