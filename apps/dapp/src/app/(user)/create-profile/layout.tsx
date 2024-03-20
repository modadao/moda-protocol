export default function CreateProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="container mx-auto p-8 flex justify-center">
        {children}
      </div>
    </>
  );
}
