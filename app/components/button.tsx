export default function Button({
  children,
  type = "primary",
}: {
  children: React.ReactNode;
  type?: "primary" | "secondary";
}) {
  return <button className={`btn btn-${type} rounded-none`}>{children}</button>;
}
