import { useRef } from "react"

import classes from "./NewCommentForm.module.css"

const NewCommentForm = (props) => {
  const commentTextRef = useRef()

  const submitFormHandler = (event) => {
    event.preventDefault()
    const enteredComment = commentTextRef.current.value

    // optional: Could validate here

    // send comment to server
    // fetch(
    //   "https://react-http-88862-default-rtdb.firebaseio.com/comments.json",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       commentData: { text: enteredComment },
    //       quoteId: props.quoteId,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // )
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  )
}

export default NewCommentForm
