import './technology.css'
import { useState } from 'react'
import json from '../starter-code/data.json'
import launch from '../starter-code/assets/technology/image-launch-vehicle-portrait.jpg'
import space from '../starter-code/assets/technology/image-space-capsule-portrait.jpg'
import spaceport from '../starter-code/assets/technology/image-spaceport-portrait.jpg'
import TechnologyNav from './TechnologyNav'

const text = json.technology

export default function Technology () {
  const image = [launch, space, spaceport]
  const [id, setId] = useState(0)

  return (
    <main className="tech__body">
      <h1 className='title'><span>03 </span>Space launch 101</h1>

      <section className='tech__container'>
        <TechnologyNav setId={setId} />

        <div className='tech__div'>
          <h3>the terminology..</h3>
          <h2>{text[id].name}</h2>
          <p>{text[id].description}</p>
        </div>
        <img src={image[id]} alt={text[id].name}/>
      </section>
    </main>
  )
}