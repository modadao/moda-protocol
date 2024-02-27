'use client';

export default function EditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto p-8 flex justify-center">{children}</div>
  );
}
