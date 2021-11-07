import myPostsClasses from "./MyPosts.module.css"
import Post from "./Post/Post";

function MyPosts() {

    let posts = [
        {message: 'Hi', likesCount: '21'},
        {message: 'Hey', likesCount: '14'}
    ]

    let postsElements = posts.map(
        dialog =>  <Post message={dialog.message} likesCount={dialog.likesCount}/>
    )

    return <div>my post
        <div>
            <textarea></textarea>
            <div>
                <button>Add</button>
            </div>
        </div>
        <div className={myPostsClasses.posts}>
            {postsElements}
        </div>
    </div>
}

export default MyPosts;