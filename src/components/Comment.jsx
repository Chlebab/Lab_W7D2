
const Comment = ({children, author, commentId}) => {

    return (
        <>
            <p>{commentId}</p>
            <p>{author}</p>
            <p>{children}</p>
        </>
    )
}

export default Comment