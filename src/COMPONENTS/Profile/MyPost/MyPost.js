import Post from "./post/post";
import React from "react";
import s from './MyPost.module.css'
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
    let postsElements = props.post.map((p, index) => <Post key={index + 1} message={p.text} likesCount={p.likes}/>);

    const addNewPost = (value) => {
        props.addPostActionCreator(value.newPost)

    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <ReduxPostForm onSubmit={addNewPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const ProfilePostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPost' component='textarea'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};
const ReduxPostForm = reduxForm({
    form: 'ProfileAddPostForm'
})(ProfilePostForm)
export default MyPosts

