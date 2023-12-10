import Link from 'next/link';

export default function Menu() {
  return (
    <div className="flex flex-row gap-12 ">
      <h1 className="opacity-100 hover:opacity-75 cursor-pointer ">
        <Link href={'/dashboard'}>Dashboard</Link>
      </h1>
      <h1 className="opacity-100 hover:opacity-75 cursor-pointer ">
        <Link href={'/tracks'}>Tracks</Link>
      </h1>
      <h1 className="opacity-100 hover:opacity-75 cursor-pointer ">
        <Link href={'/labels'}>Labels</Link>
      </h1>
    </div>
  );
}
