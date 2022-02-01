import Post from "./post/post";
import React from "react";
import s from './MyPost.module.css'

const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.text} likesCount={p.likes}/>);

    let newPostElement = React.createRef();




    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={(e)=>props.updateNewPostText(e.target.value)}  ref={newPostElement} value={props.Profile.newPostText}/>
                </div>
                <div>
                    <button onClick={ props.addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;