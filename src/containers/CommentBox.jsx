
import CommentForm from "../components/CommentForm"
import CommentList from "../components/CommentList"
import React, {useState} from "react"

const CommentBox = () => {

    const [comments, setComments] = useState( [
        {
            id: 1,
            author: "Rick Henry",
            text: "React is such a great framework!"
        },
        {
            id: 2,
            author: "Valerie Gibson",
            text: "I'm dreaming in React..."
        }
    ])

    const addComment = (commentToAdd) => {
        commentToAdd.id = Date.now()
        const updatedComments = [...comments, commentToAdd]
        setComments(updatedComments)
    }

    return (
        <>
            <h2>I am a comment box</h2>
            <CommentList commentsProp={comments}/>
            <p>Add comment: </p>
            <CommentForm addCommentProp={addComment}></CommentForm>
        </>
    )

}           


export default CommentBox