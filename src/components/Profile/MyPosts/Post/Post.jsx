import postClasses from "./Post.module.css"

function Post(props) {
    return <div className={postClasses.item}>
        <img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg"
            alt=""/>
        {props.message}
        <div>
            <span>Like </span> {props.likesCount}
        </div>
    </div>
}

export default Post;