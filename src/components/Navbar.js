import { NavLink } from "./Navlink";
import open from "../starter-code/assets/shared/icon-hamburger.svg"
import close from "../starter-code/assets/shared/icon-close.svg"
import { useState } from "react";

export default function Navbar () {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
    document.querySelector('.header__nav').classList.toggle('active')
  }

  return (
    <>
      <img 
        onClick={handleClick}
        className="burger open"
        src={open} 
        alt="button"
      />
      <nav className="header__nav">
        <ul className="header__list">
          <img 
            onClick={handleClick}
            className="burger close"
            src={close} 
            alt="button"
          />
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
    </>
  )
}