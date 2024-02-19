import Link from 'next/link';

export default function UserLinks() {
  return (
    <div className="flex flex-col gap-2 text-lg">
      <Link href="/dashboard" className="italic font-extrabold">
        Dashboard
      </Link>
      <Link href="/crate" className="italic font-extrabold">
        Crate
      </Link>
    </div>
  );
}
