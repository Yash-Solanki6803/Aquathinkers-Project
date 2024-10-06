import { Link } from "react-router-dom";
// import "./Navbar.css";

function Navbar() {
  return (
    <nav className="w-4/6 bg-slate-400 fixed top-4 left-4 p-2 rounded-xl backdrop-blur-md shadow">
      <ul className="flex flex-row justify-evenly content-center">
        <h1>
          
        </h1>

        <li>
          <Link to="/">Aquathinkers</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
