import { NavBar } from '@/components/Navbar';

export default function CreateProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar links={[{ href: '/dashboard', text: 'Dashboard' }]} />
      <div className="container mx-auto p-8 flex justify-center">
        {children}
      </div>
    </>
  );
}
