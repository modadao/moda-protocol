import { FaInstagram, FaSpotify } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

interface SocialLinksProps {
  spotify?: string;
  twitter?: string;
  instagram?: string;
}

const SocialLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      className="text-black text-2xl transition-all duration-200 hover:scale-125 p-2"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default function SocialLinks({
  spotify,
  twitter,
  instagram,
}: SocialLinksProps) {
  return (
    <div className=" right-3 top-0 bg-white rounded-md border-gray-500 flex flex-row text-white">
      {spotify && (
        <SocialLink href={spotify}>
          <FaSpotify />
        </SocialLink>
      )}
      {twitter && (
        <SocialLink href={twitter}>
          <FaXTwitter />
        </SocialLink>
      )}
      {instagram && (
        <SocialLink href={instagram}>
          <FaInstagram />
        </SocialLink>
      )}
    </div>
  );
}
