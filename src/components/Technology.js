import './technology.css'
import { useState } from 'react'
import json from '../starter-code/data.json'
import launchPortrait from '../starter-code/assets/technology/image-launch-vehicle-portrait.jpg'
import launchLandscape from '../starter-code/assets/technology/image-launch-vehicle-landscape.jpg'
import spaceportPortrait from '../starter-code/assets/technology/image-spaceport-portrait.jpg'
import spaceportLandscape from '../starter-code/assets/technology/image-spaceport-landscape.jpg'
import spaceCapsulePortrait from '../starter-code/assets/technology/image-space-capsule-portrait.jpg'
import spaceCapsuleLandscape from '../starter-code/assets/technology/image-space-capsule-landscape.jpg'
import TechnologyNav from './TechnologyNav'

const text = json.technology

export default function Technology () {
  const portrait = [launchPortrait, spaceportPortrait, spaceCapsulePortrait]
  const landscape = [launchLandscape, spaceportLandscape, spaceCapsuleLandscape]
  
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

        <img
          src={window.innerWidth > 800 ? portrait[id] : landscape[id]}
          alt={text[id].name}
        />
      </section>
    </main>
  )
}