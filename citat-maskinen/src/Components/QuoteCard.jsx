{/* JSX QUOTECARD CODE BELOW */}

import { Link } from "react-router-dom";

export default function QuoteCard({quote, index }) {

  return (
    <section className='quote-card'>
      {quote ? <section><h3>{quote.text}</h3><p>{quote.author}</p></section> : <p></p>}
      <section>
        {quote && <Link to={`/edit/${quote.id}`}>ÄNDRA</Link>}
        {quote && <Link to={`/remove/${quote.id}`}>TA BORT</Link>}
      </section>
    </section>
  )
}

{/* JSX QUOTECARD CODE ABOVE */}
