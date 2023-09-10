export default function Button({
  children,
  type = "primary",
}: {
  children: React.ReactNode;
  type?: "primary" | "secondary";
}) {
  switch (type) {
    case "primary":
      return (
        <button className={`btn btn-primary rounded-none`}>{children}</button>
      );
    case "secondary":
      return (
        <button className={`btn btn-secondary rounded-none`}>{children}</button>
      );
    default:
      return (
        <button className={`btn btn-primary rounded-none`}>{children}</button>
      );
      break;
  }
}
