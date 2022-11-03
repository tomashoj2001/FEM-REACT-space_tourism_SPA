import { NavLink } from "./Navlink";

export default function Navbar () {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        <li>
          <NavLink className="nav__link" to="/" end>
            <span>00 </span>Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/destination">
            <span>01 </span>Destination
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/crew">
            <span>02 </span>Crew
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/technology">
            <span>03 </span>Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}