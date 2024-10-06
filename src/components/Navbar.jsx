import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className=" w-full absolute top-4  py-2 px-8 flex justify-between content-center">
      <ul className="w-full blur-navbar py-2 px-8  flex justify-between content-center  rounded-xl">
        <div>
          <Link to="/" className="text-xl">
            Aquathinkers
          </Link>
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
