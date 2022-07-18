import { useRef, useState } from "react"
import { Prompt } from "react-router-dom"

import Card from "../UI/Card"
import LoadingSpinner from "../UI/LoadingSpinner"
import classes from "./QuoteForm.module.css"

const QuoteForm = (props) => {
  const authorInputRef = useRef()
  const textInputRef = useRef()

  const [isEditing, setIsEditing] = useState(false)

  function submitFormHandler(event) {
    event.preventDefault()

    const enteredAuthor = authorInputRef.current.value
    const enteredText = textInputRef.current.value

    // Validtion for entered values
    //...

    props.onAddQuote({ author: enteredAuthor, text: enteredText })
  }

  const formTouchedHandler = () => {
    setIsEditing(true)
  }

  return (
    <Card>
      <Prompt
        when={isEditing}
        message={() =>
          "Warning: Are you sure that you want to leave this page? Enterd information(if any) will be lost."
        }

        // message={(location) => {
        //   return location.pathname.startsWith("/app")
        //     ? true
        //     : `Are you sure you want to go to ${location.pathname}?`
        // }}
      />
      <form
        className={classes.form}
        onSubmit={submitFormHandler}
        onFocus={formTouchedHandler}
      >
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn" onClick={() => setIsEditing(false)}>
            Add Quote
          </button>
        </div>
      </form>
    </Card>
  )
}

export default QuoteForm
