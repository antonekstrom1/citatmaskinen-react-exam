{/* JSX START CODE BELOW */}

import { useEffect } from "react";
import Hero from "../Components/Hero";
import QuotesContainer from "../Components/QuotesContainer";

export default function start() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <article>
    <Hero />
    <QuotesContainer />
    </article>
  )
}

{/* JSX START CODE ABOVE */}
