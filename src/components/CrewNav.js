export default function CrewNav () {
  // const handleClick = (e, id) => {
  //   const links = [...document.querySelectorAll('.crew__link')]
  //   setId(id)

  //   links.forEach(el => el.classList.remove('selected'))
  //   e.target.classList.add('selected')
  // }

  // return (
  //   <nav className="crew__nav">
  //     <button className="crew__link selected" onClick={(e) => handleClick(e, 0)}>1</button>
  //     <button className="crew__link" onClick={(e) => handleClick(e, 1)}>2</button>
  //     <button className="crew__link" onClick={(e) => handleClick(e, 2)}>3</button>
  //     <button className="crew__link" onClick={(e) => handleClick(e, 3)}>4</button>
  //   </nav>

  // return (
  //   <nav className="crew__nav">
  //     <button className="crew__link selected" onClick={() => setId(0)}>1</button>
  //     <button className="crew__link" onClick={() => setId(1)}>2</button>
  //     <button className="crew__link" onClick={() => setId(2)}>3</button>
  //     <button className="crew__link" onClick={() => setId(3)}>4</button>
  //   </nav>
  return (
    <nav className="crew__nav">
      <button className="crew__link selected">1</button>
      <button className="crew__link">2</button>
      <button className="crew__link">3</button>
      <button className="crew__link">4</button>
    </nav>
  )
}