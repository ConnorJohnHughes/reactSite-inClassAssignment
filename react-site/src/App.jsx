// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Header from './components/Header'
// import './App.css'
import GoodGuys from './components/GoodGuys';
import { characters } from './data/character';
import Hero from './components/Hero'
import Map from './components/Map';
import Footer from './components/Footer';
import { badguys } from './data/badguys';
import BadGuys from './components/BadGuys'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <Header />
      <Hero />
      <Map />
      <section>
        <h1 className='card-title' id="heroes">Heroes of Lord of The Rings</h1>
          {characters.map((_, index) =>(
            <GoodGuys key={index} character={char}/>
          ))}
      </section>
      <section>
        <h1 className='card-title' id="villains">Villains of Lord of The Rings</h1>
        {badguys.map((char, index) =>(
          <BadGuys key={index} character={char}/>
        ))}
      </section>
      <Footer />
      <a href="#header" className="back-to-top">&#8593; Top</a>
    </main>
  )
}

export default App
