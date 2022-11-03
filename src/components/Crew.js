import './crew.css'
import json from '../starter-code/data.json'
import { useEffect, useState } from 'react'
import commander from '../starter-code/assets/crew/image-douglas-hurley.webp'
import specialist from '../starter-code/assets/crew/image-mark-shuttleworth.webp'
import pilot from '../starter-code/assets/crew/image-victor-glover.webp'
import engineer from '../starter-code/assets/crew/image-anousheh-ansari.webp'
import CrewNav from './CrewNav'

const text = json.crew

export default function Crew () {
  const image = [commander, specialist, pilot, engineer]

  const [id, setId] = useState(0)

  useEffect(() => {
    const links = [...document.querySelectorAll('.crew__link')]

    setTimeout(() => {
      links[id].classList.remove('selected')
      id < 3 ? setId(id + 1) : setId(0)
      links[id].classList.add('selected')
    }, 7000);

    links.forEach(el => el.classList.remove('selected'))
    links[id].classList.add('selected')
  }, [id])

  return (
    <main className='crew__body'>
      <h1 className='title'><span>02 </span>Meet your crew</h1>
      
      <section className='crew__container'>
        <div className='crew__div'>
          <h3>{text[id].role}</h3>
          <h2>{text[id].name}</h2>
          <p>{text[id].bio}</p>
          <CrewNav />
        </div>

        <img src={image[id]} alt={text[id].name}/>
      </section>
    </main>
  )
}