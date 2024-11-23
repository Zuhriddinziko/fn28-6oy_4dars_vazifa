import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <header className="hh">
      <div className="bir countiner">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/aboute">Blok</NavLink>
          <NavLink to="/works">Works</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
