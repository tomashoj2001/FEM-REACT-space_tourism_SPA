import { Link } from 'react-router-dom'
import './home.css'

export default function Home () {
  return (
    <main className='home__body'>
      <section className='home__container'>
        <h2 className='home__title'>So, you want to travel to</h2>
        <h1 className='home__title'>S P A C E</h1>
        <p className='home__paragraph'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </section>
      <section className='home__container'>        
        <Link className='explore' to="/destination">Explore</Link>
      </section>
    </main>
  )}