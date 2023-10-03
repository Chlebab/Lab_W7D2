import Comment from "./Comment"

const CommentList = ({commentsProp}) => {

    const commentReactComponents = commentsProp.map((commentInfo) => {
        return <Comment key={commentInfo.id} commentId={commentInfo.id} author={commentInfo.author}>{commentInfo.text}</Comment>
    })


    return (
        <>
            <p><b>I'm a comment list</b></p>
            {commentReactComponents}
        </>
    )
}

export default CommentList