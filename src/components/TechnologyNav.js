export default function TechnologyNav ({ setId }) {
  const handleClick = (e, id) => {
    const links = [...document.querySelectorAll('.tech__link')]
    
    setId(id)

    links.forEach(el => el.classList.remove('selected'))
    e.target.classList.add('selected')
  }

  return (
    <nav className='tech__nav'>
      <button className='tech__link selected' onClick={(e) => handleClick(e, 0)}>1</button>
      <button className='tech__link' onClick={(e) => handleClick(e, 1)}>2</button>
      <button className='tech__link' onClick={(e) => handleClick(e, 2)}>3</button>
    </nav>
  )
}