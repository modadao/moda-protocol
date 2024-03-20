import { NavbarDashboard } from '@/components/User/Dashboard/NavBarUser';
import { ProfileContextProvider } from '@/context/ProfileContext';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarDashboard />
      <ProfileContextProvider>{children}</ProfileContextProvider>
    </>
  );
}
