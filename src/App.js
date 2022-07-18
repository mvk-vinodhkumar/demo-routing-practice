import { Route, Switch, Redirect } from "react-router-dom"
import { useState, useEffect } from "react"

import AllQuotes from "./pages/AllQuotes"
import QuoteDetail from "./pages/QuoteDetail"
import NewQuote from "./pages/NewQuote"
import Layout from "./components/layout/Layout"
import PageNotFound from "./pages/PageNotFound"

let initialState = true
function App() {
  const [loadedQuotes, setLoadedQuotes] = useState([])

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-88862-default-rtdb.firebaseio.com/quotes.json"
      )

      if (!response.ok) {
        throw new Error("Something went wrong!")
      }

      const data = await response.json()

      const transformedData = []
      for (const [key, value] of Object.entries(data)) {
        transformedData.push({
          id: key,
          pos: data[key].pos,
          author: data[key].author,
          text: data[key].text,
        })
      }
      // console.log(transformedData)
      setLoadedQuotes(transformedData)
    }

    sendRequest().catch((error) => {
      console.log(error.message)
    })
  }, [])

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes quotes={loadedQuotes} />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail quotes={loadedQuotes} />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
