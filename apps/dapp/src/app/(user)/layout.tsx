import { NavbarDashboard } from '@/components/User/Dashboard/NavBarUser';
import { ProfileContextProvider } from '@/context/ProfileContext';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-y-scroll h-[100vh]">
      <NavbarDashboard />
      <ProfileContextProvider>{children}</ProfileContextProvider>
    </div>
  );
}
