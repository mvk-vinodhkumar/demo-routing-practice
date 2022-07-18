import { Link } from "react-router-dom"
import classes from "./NoQuotesFound.module.css"

const NoQuotesFound = (props) => {
  const displayText = props.text ? props.text : "No quotes found!"
  return (
    <div className={classes.noquotes}>
      <p>{displayText}</p>
      <Link to="/new-quote" className="btn">
        Add a Quote
      </Link>
    </div>
  )
}

export default NoQuotesFound
