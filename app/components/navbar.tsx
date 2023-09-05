export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          Elevation Fitness Gym
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Find a Gym</a>
          </li>
        </ul>
      </div>
      <button className="btn btn-primary">Primary</button>
    </div>
  );
}
