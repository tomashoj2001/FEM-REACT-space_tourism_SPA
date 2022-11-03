import './destination.css'
import json from '../starter-code/data.json'
import { useState } from 'react'
import moonwebp from '../starter-code/assets/destination/image-moon.webp'
import marswebp from '../starter-code/assets/destination/image-mars.webp'
import europawebp from '../starter-code/assets/destination/image-europa.webp'
import titanwebp from '../starter-code/assets/destination/image-titan.webp'
import DestinationNav from './DestinationNav'

const text = json.destinations

export default function Destination () {
  const image = [moonwebp, marswebp, europawebp, titanwebp]

  const [id, setId] = useState(0)

  return (
    <main className="destination__body">
      <h1 className='title'><span>01 </span>Pick your destination</h1>

      <section className='destination__container'>
        <img src={image[id]} alt={text[id].name}/>

        <div className='destination__div'>
          <DestinationNav setId={setId} />
          <h2 className='destination__titleh2'>{text[id].name}</h2>
          <p className='destination__paragraph'>{text[id].description}</p>
          <section className='journey'>    
            <p>
              AVG. DISTANCE
              <span>{text[id].distance}</span>
            </p>
            <p>
              EST. TIME TRAVEL
              <span>{text[id].travel}</span>
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}