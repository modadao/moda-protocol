import { NavBarProfile } from '@/components/Profile/NavBarProfile';
import { ProfileContextProvider } from '@/context/ProfileContext';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBarProfile />
      <ProfileContextProvider>{children}</ProfileContextProvider>
    </>
  );
}
