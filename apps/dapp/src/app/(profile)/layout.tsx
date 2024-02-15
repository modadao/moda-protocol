import { NavBarProfile } from '@/components/NavBarProfile';
import { ProfileContextProvider } from '@/context/ProfileContext';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBarProfile />
        <ProfileContextProvider>{children}</ProfileContextProvider>
      </body>
    </html>
  );
}
