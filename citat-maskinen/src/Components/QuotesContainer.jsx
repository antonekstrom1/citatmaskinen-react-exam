{/* JSX QUOTESCONTAINER CODE BELOW */}

import QuoteCard from './QuoteCard'
import { useState } from 'react'

import { useSelector } from 'react-redux'

export default function QuotesContainer() {

  const quotes = useSelector((state) => state.quotes)
  
  const [numberOfItems, setNumberOfItems] = useState(10)

  function increaseNumberOfQuotes() {
    setNumberOfItems(numberOfItems + 10)
  }

  return (
    <section className='container'>
      {
        quotes && 
        quotes.slice(0, numberOfItems).map((quote, i) => <QuoteCard key={quote.id} quote={quote} index={i}/>)
      }
      <section className='btns-container'>
        <button onClick={() => increaseNumberOfQuotes()}>FLER CITAT</button>
      </section>
    </section>
  )
}

{/* JSX QUOTESCONTAINER CODE ABOVE */}