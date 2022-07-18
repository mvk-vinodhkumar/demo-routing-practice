import { Fragment } from "react"
import { useParams, Route, Link, useRouteMatch } from "react-router-dom"
import HighlightedQuote from "../components/quotes/HighlightedQuote"
import Comments from "../components/comments/Comments"
import NoQuotesFound from "../components/quotes/NoQuotesFound"

// const _QUOTES = [
//   {
//     id: "q1",
//     author: "T.S Eliot",
//     text: "Every moment is a fresh beginning.",
//   },
//   {
//     id: "q2",
//     author: "Anaïs Nin",
//     text: "Good things happen to those who hustle.",
//   },
//   {
//     id: "q3",
//     author: "Anonymous",
//     text: "What consumes your mind controls your life.",
//   },
//   {
//     id: "q4",
//     author: "Jessica N. S. Yourko",
//     text: "Have enough courage to start and enough heart to finish.",
//   },
//   {
//     id: "q5",
//     author: "Robert H. Schiller",
//     text: "Problems are not stop signs, they are guidelines.",
//   },
// ]

const QuoteDetail = (props) => {
  const params = useParams()
  // const location = useLocation()
  const match = useRouteMatch()
  // console.log(match)
  // console.log(location)
  // const isCommentsPresentInUrl = location.pathname.indexOf("comments") !== -1

  const viewQuote = props.quotes.find((quote) => quote.id === params.quoteId)
  // console.log(viewQuote)

  if (!viewQuote) {
    return <NoQuotesFound text="No Quote Found!" />
  }

  return (
    <Fragment>
      {/* <h1>Quote Detail Page</h1> */}
      {/* <p>{params.quoteId}</p> */}
      <HighlightedQuote text={viewQuote.text} author={viewQuote.author} />

      <Route path={`${match.path}`} exact>
        <Link to={`${match.url}/comments`} className="btn--flat btn--alt">
          Load Comments
        </Link>
      </Route>

      {/* <Route path={`/quotes/${params.quoteId}/comments`}> */}
      <Route path={`${match.path}/comments`}>
        {/* Having a place holder is okay because this isn't a link, it is a route definition */}
        <Comments />
      </Route>
    </Fragment>
  )
}

export default QuoteDetail
