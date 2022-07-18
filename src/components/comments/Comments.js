import { useEffect, useState } from "react"

import classes from "./Comments.module.css"
import NewCommentForm from "./NewCommentForm"

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false)

  const startAddCommentHandler = () => {
    setIsAddingComment(true)
  }

  // useEffect(() => {
  //   const fetchComments = async () => {
  //     const response = await fetch(
  //       "https://react-http-88862-default-rtdb.firebaseio.com/comments.json",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(enteredComment),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )

  //     if (!response.ok) {
  //       throw new Error("Fetch Failed!")
  //     }

  //     const data = response.json()
  //     console.log(data)
  //   }
  // }, [])

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments...</p>
    </section>
  )
}

export default Comments
