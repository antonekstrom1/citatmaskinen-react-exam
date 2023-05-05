{/* JSX ADDQUOTE CODE BELOW */}

import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addQuote } from '../redux/actions/quoteActions';
import { v4 as uuid } from 'uuid';
import Form from "../Components/Form"

export default function AddQuote() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const addNewQuote = (e) => {
    e.preventDefault();
    let newQuote = {
      text: text,
      author: author,
      id: uuid()
    }
    dispatch(addQuote(newQuote))
    navigate("/")
  }

  return (
    <article className='form-container add'>
      <h3>LÄGG TILL CITAT</h3>
      <Form action={(e) => addNewQuote(e)} actionAuthor={(e) => {setAuthor(e.target.value)}} actionText={(e) => {setText(e.target.value)}} />
    </article>
  )
}

{/* JSX ADDQUOTE CODE ABOVEW */}