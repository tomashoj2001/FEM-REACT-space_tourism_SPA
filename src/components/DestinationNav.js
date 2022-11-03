import { NavLink } from "react-router-dom";

export default function DestinationNav ({ setId }) {  
  const handleClick = (e, id) => {
    const links = [...document.querySelectorAll('.destination__link')]
    
    setId(id)
    
    links.forEach(el => el.classList.remove('selected'))
    e.target.classList.add('selected')
  }

  return (
    <nav className='destination__nav'>
      <ul className="destination__list">
        <NavLink onClick={(e) => handleClick(e, 0)} className="destination__link selected">Moon</NavLink>
        <NavLink onClick={(e) => handleClick(e, 1)} className="destination__link">Mars</NavLink>
        <NavLink onClick={(e) => handleClick(e, 2)} className="destination__link">Europa</NavLink>
        <NavLink onClick={(e) => handleClick(e, 3)} className="destination__link">Titan</NavLink>
      </ul>
    </nav>
  )
}