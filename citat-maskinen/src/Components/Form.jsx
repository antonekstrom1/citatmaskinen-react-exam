{/* JSX FORM CODE BELOW */}

import { Link} from "react-router-dom"

export default function Form({quote, action, actionAuthor, actionText}) {
  return (
    <form onSubmit={action}>
      <section>
        <label htmlFor='author'>FÖRFATTARE</label>
        <input type="text" id="author" name='author'  defaultValue={quote && quote.author} onChange={actionAuthor}></input>
      </section>
      <section>
        <label htmlFor='quote'>CITAT:</label>
        <textarea type="text" id="quote" name='quote'  defaultValue={quote && quote.text} onChange={actionText}></textarea>
      </section>
      <section className='btns-container'>
        <button type="submit">SPARA</button>
        <Link to="/"><button>AVBRYT!</button></Link>
      </section>
    </form>
  )
}

{/* JSX FORM CODE ABOVE */}