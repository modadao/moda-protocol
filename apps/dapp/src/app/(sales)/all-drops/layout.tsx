interface AllDropsLayoutProps {
  children?: React.ReactNode;
}

export default function AllDropsLayout({ children }: AllDropsLayoutProps) {
  return <main className="container mx-auto">{children}</main>;
}
