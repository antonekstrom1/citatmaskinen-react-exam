{/* JSX REMOVEQUOTE CODE BELOW */}

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { removeQuote } from "../redux/actions/quoteActions"

export default function RemoveQuote() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.quotes);
  const params = useParams();


  const [quote, setQuote] = useState()

  useEffect(() => {
    let currentQuote = state.find((q) => params.id === q.id)
    setQuote(currentQuote)
  }, [state, params.id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function handleDelete() {
    dispatch(removeQuote(params.id))
  }

  return (
    <article className='form-container remove'>
      <h4>TA BORT OMDÖME</h4>
      <section className="remove-quote">
        <p>{quote && quote.text}</p>
        <small>{quote && quote.author}</small>
      </section>
      <section className='btns-container'>
        <Link to="/"><button onClick={() => handleDelete()}>AJJEMÄN!</button></Link>
        <Link to="/"><button>NIX!</button></Link>
      </section>
    </article>
  )
}

{/* JSX REMOVEQUOTE CODE ABOVE */}