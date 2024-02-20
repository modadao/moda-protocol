import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LogoWhite from '../../public/logo-white.svg';
import { SubscribeForm } from './LandingPage/SubscribeForm';
import { SocialLinks } from './SocialLinks';

interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

const FooterLinks1: FooterLink[] = [
  {
    label: 'Terms and Conditions',
    href: '/page/terms-and-conditions',
  },
  {
    label: 'Privacy Policy',
    href: '/page/privacy-policy',
  },
];
const FooterLinks2: FooterLink[] = [];

if (
  process.env.NEXT_PUBLIC_SOCIAL_ONE &&
  process.env.NEXT_PUBLIC_SOCIAL_LINK_ONE
) {
  FooterLinks2.push({
    label: process.env.NEXT_PUBLIC_SOCIAL_ONE,
    href: process.env.NEXT_PUBLIC_SOCIAL_LINK_ONE,
    isExternal: true,
  });
}
if (
  process.env.NEXT_PUBLIC_SOCIAL_TWO &&
  process.env.NEXT_PUBLIC_SOCIAL_LINK_TWO
) {
  FooterLinks2.push({
    label: process.env.NEXT_PUBLIC_SOCIAL_TWO,
    href: process.env.NEXT_PUBLIC_SOCIAL_LINK_TWO,
    isExternal: true,
  });
}
if (
  process.env.NEXT_PUBLIC_SOCIAL_THREE &&
  process.env.NEXT_PUBLIC_SOCIAL_LINK_THREE
) {
  FooterLinks2.push({
    label: process.env.NEXT_PUBLIC_SOCIAL_THREE,
    href: process.env.NEXT_PUBLIC_SOCIAL_LINK_THREE,
    isExternal: true,
  });
}

const FooterLinks3: FooterLink[] = [];

if (process.env.NEXT_PUBLIC_BLOG && process.env.NEXT_PUBLIC_BLOG_LINK) {
  FooterLinks3.push({
    label: process.env.NEXT_PUBLIC_BLOG,
    href: process.env.NEXT_PUBLIC_BLOG_LINK,
    isExternal: true,
  });
}

if (process.env.NEXT_PUBLIC_APPLY && process.env.NEXT_PUBLIC_APPLY_LINK) {
  FooterLinks3.push({
    label: process.env.NEXT_PUBLIC_APPLY,
    href: process.env.NEXT_PUBLIC_APPLY_LINK,
    isExternal: true,
  });
}

const NavList = ({ links, title }: { links: FooterLink[]; title?: string }) => {
  return (
    <nav>
      {title && <h1 className="font-bold">{title}</h1>}
      {links.map((link, index) => (
        <div key={link.label + index}>
          {link.isExternal ? (
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="opacity-60 hover:opacity-100 text-sm"
            >
              {link.label}
            </a>
          ) : (
            <Link
              href={link.href}
              className="opacity-60 hover:opacity-100 text-sm"
            >
              {link.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export const GlobalFooter = () => {
  return (
    <div className="bg-black text-white relative px-8 pt-20 overflow-hidden">
      <div className="space-y-12 md:space-y-6">
        <div className="flex items-center justify-center">
          <SocialLinks />
        </div>

        <div className="container p-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex justify-center text-center md:text-left">
              <NavList links={FooterLinks1} title="Boring Stuff" />
            </div>
            <div className="flex justify-center text-center md:text-left">
              <NavList links={FooterLinks2} title="Community" />
            </div>
            <div className="flex justify-center text-center md:text-left">
              <NavList links={FooterLinks3} title="Artist" />
            </div>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <SubscribeForm />
        </div>

        <div className="flex items-center justify-center pt-10">
          <Image
            src={LogoWhite}
            alt="Logo White"
            className="w-full max-w-2xl -mb-3"
          />
        </div>
      </div>
    </div>
  );
};
