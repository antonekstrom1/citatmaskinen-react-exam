{/* JSX EDITQUOTE CODE BELOW */}

import { useEffect, useState } from 'react'
import { useNavigate, useParams} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { editQuote } from '../redux/actions/quoteActions';
import Form from "../Components/Form"

export default function EditQuote() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const state = useSelector((state) => state.quotes);
  const params = useParams();

  const [quote, setQuote] = useState()
  const [newQuote, setNewQuote] = useState({ author: "", text: "" })

  useEffect(() => {
    let currentQuote = state.find((q) => params.id === q.id)
    setQuote(currentQuote)
  }, [state, params.id])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleEdit = (e) => {
    e.preventDefault();
    if (newQuote.author) {
      dispatch(editQuote(params.id, "author", newQuote.author));
    }
    if (newQuote.text) {
      dispatch(editQuote(params.id, "text", newQuote.text));
    }
    navigate("/")
  }
  
  return (
    <article className='form-container edit'>
      <h3>REDIGERA</h3>
      <Form quote={quote} action={(e) => handleEdit(e)} actionAuthor={(e) => setNewQuote({ ...newQuote, "author": e.target.value})} actionText={(e) => setNewQuote({ ...newQuote, "text": e.target.value})} />
    </article>
  )
}

{/* JSX EDITQUOTE CODE ABOVE */}