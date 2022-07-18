import QuoteList from "../components/quotes/QuoteList"

// const _QUOTES = [
//   {
//     id: "q1",
//     pos: 1,
//     author: "T.S Eliot",
//     text: "Every moment is a fresh beginning.",
//   },
//   {
//     id: "q2",
//     pos: 2,
//     author: "Anaïs Nin",
//     text: "Good things happen to those who hustle.",
//   },
//   {
//     id: "q3",
//     pos: 3,
//     author: "Anonymous",
//     text: "What consumes your mind controls your life.",
//   },
//   {
//     id: "q4",
//     pos: 4,
//     author: "Jessica N. S. Yourko",
//     text: "Have enough courage to start and enough heart to finish.",
//   },
//   {
//     id: "q5",
//     pos: 5,
//     author: "Robert H. Schiller",
//     text: "Problems are not stop signs, they are guidelines.",
//   },
// ]

const AllQuotes = (props) => {
  console.log("AllQuotes")

  return <QuoteList quotes={props.quotes} />
}

export default AllQuotes
