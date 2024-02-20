import { FaDiscord, FaInstagram, FaXTwitter } from 'react-icons/fa6';

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

export const SocialLinks = () => {
  return (
    <div className="bg-white border rounded-md border-gray-500 flex group text-white">
      <SocialLink href={''}>
        <FaDiscord />
      </SocialLink>

      <SocialLink href={''}>
        <FaXTwitter />
      </SocialLink>

      <SocialLink href={''}>
        <FaInstagram />
      </SocialLink>
    </div>
  );
};
