{/* JSX HERO CODE BELOW */}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import QuoteCard from './QuoteCard'

export default function Hero() {

  const quotes = useSelector((state) => state.quotes)

  const [heroQuote, setHeroQuote] = useState()

  useEffect(() => {
    generateQuote()
  }, [quotes])

  const generateQuote = () => {
    let n = Math.floor(Math.random()*1000)
    setHeroQuote(quotes[n])
  }

  return (
    <section className='hero'>
      <QuoteCard quote={heroQuote} />
      <section className='btns-container'>
        <button onClick={() => generateQuote()}>NYTT CITAT</button>
        <Link to="/add"><button>LÄGG TILL CITAT</button></Link>
      </section>
    </section>
  )
}

{/* JSX HERO CODE ABOVE */}