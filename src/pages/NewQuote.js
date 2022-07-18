import { useHistory } from "react-router-dom"
import QuoteForm from "../components/quotes/QuoteForm"

const NewQuote = (props) => {
  const history = useHistory()
  // console.log(history)

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData)

    fetch("https://react-http-88862-default-rtdb.firebaseio.com/quotes.json", {
      method: "POST",
      body: JSON.stringify(quoteData),
      headers: {
        "Content-Type": "application/json",
      },
    })

    history.push("/quotes") //allows going back
    // history.replace("/quotes") //doesn't allow going back
  }

  return <QuoteForm onAddQuote={addQuoteHandler} />
}

export default NewQuote
