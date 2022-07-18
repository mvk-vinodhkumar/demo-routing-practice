import { Fragment } from "react"
import { useHistory, useLocation } from "react-router-dom"

import QuoteItem from "./QuoteItem"
import classes from "./QuoteList.module.css"

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1
    } else {
      return quoteA.id < quoteB.id ? 1 : -1
    }
  })
}

const QuoteList = (props) => {
  console.log("Quote List")
  const history = useHistory() //To manage and change URL
  const location = useLocation() //To get current pages's URL info

  const queryParametersInfo = new URLSearchParams(location.search) //Constructor func instance to convert the SEARCH string info to an obj. Eg: sort:asc

  const isAscending = queryParametersInfo.get("sort") === "asc"
  const sortedQuotes = sortQuotes(props.quotes, isAscending)

  const sortQuotesHandler = () => {
    const sortType = isAscending ? "dsc" : "asc"
    history.push(`${location.pathname}?sort=` + sortType) //also helpes in re-rending/re-evaluating a component

    history.push({
      pathname: location.pathname,
      search: `?sort=${sortType}`,
    })
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortQuotesHandler}>
          Sort {isAscending ? "Decending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            pos={quote.pos}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  )
}

export default QuoteList
