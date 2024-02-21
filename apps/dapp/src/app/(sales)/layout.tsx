import { GlobalFooter } from '@/components/GlobalFooter';
import { NavBar } from '@/components/Navbar/NavBar';

export default async function SalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen">
        <NavBar />
        {children}
      </div>

      <footer>
        <GlobalFooter />
      </footer>
    </>
  );
}
