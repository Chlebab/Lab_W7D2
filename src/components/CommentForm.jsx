import React, {useState} from "react"

const CommentForm = ({addCommentProp}) => {

    const [author, setAuthor] = useState('')
    const [text, setText] = useState('')

    const handleAuthorChange = (evt) => {
        setAuthor(evt.target.value)
    }

    const handleTextChange = (evt) => {
        setText(evt.target.value)
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault()
        const authorToSubmit = author.trim()
        const textToSubmit = text.trim()
        if (!authorToSubmit || !textToSubmit){
            return
        }
        addCommentProp({
            author: authorToSubmit,
            text: textToSubmit,
        })
        //TODO update the state in CommentBox
        setAuthor("")
        setText("")
    }


    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Your name" value={author} onChange={handleAuthorChange}/>
            <input type="text" placeholder="Say something..." value={text} onChange={handleTextChange}/>
            <input type="submit" value="Post"/>
        </form>
    )


} 


export default CommentForm
