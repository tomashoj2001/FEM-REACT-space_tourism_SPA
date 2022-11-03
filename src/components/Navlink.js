import { NavLink as NavLinkRR} from "react-router-dom"

export const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkRR
      className={({ isActive }) => isActive ? 'active' : undefined}
      {...props}
      to={to}
    >{children}
    </NavLinkRR>
  )
}