import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="blur-navbar w-3/6 fixed top-4 left-4 py-2 px-8 rounded-xl flex justify-between content-center">
      <ul className="w-full flex justify-between content-center">
        <div>
            <Link to="/" className="text-xl">Aquathinkers</Link>
        </div>
        <div className="flex flex-row justify-evenly content-center gap-20 text-xl">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
