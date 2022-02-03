import Post from "./post/post";
import React from "react";
import s from './MyPost.module.css'


const MyPosts = (props) => {
    let postsElements = props.state.Profile.posts.map(p => <Post message={p.text} likesCount={p.likes}/>);


    let onChangeAction = (e) => {
        let text = e.target.value
        let action = {
            type: 'UPDATE-NEW-POST-TEXT',
            newText: text

        };
        props.dispatch(action)
    }
    let onClickk = () => {
        let action = {type: 'ADD-POST'};
        props.dispatch(action)
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeAction} value={props.state.Profile.newPostText}/>
                </div>
                <div>
                    <button onClick={onClickk}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;