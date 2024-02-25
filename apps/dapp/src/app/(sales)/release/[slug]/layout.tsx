export default function Layout(props: { children: React.ReactNode }) {
  return <div className="p-4">{props?.children}</div>;
}
