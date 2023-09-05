import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link href="/" className="p-2 flex">
          <Image
            alt="Elevation fitness gym logo"
            src="/elevation-logo.svg"
            width={36}
            height={36}
          ></Image>
          <Image
            alt="Elevation fitness gym"
            src="/elevation-text.svg"
            width={150}
            height={36}
            className="hidden md:block ml-2"
          ></Image>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/gyms">Find a Gym</Link>
          </li>
        </ul>
      </div>
      <Link href="/join">
        <button className="btn btn-primary">Join Now</button>
      </Link>
    </div>
  );
}
