import Post from "./post/post";
import React from "react";
import s from './MyPost.module.css'
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/formControls/formControls";
import {maxLength30, maxLengthCreator, requiredField} from "../../../utils/validation/validators";


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
let maxLength20 = maxLengthCreator(20)

const ProfilePostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredField,maxLength20]} placeholder='Write some post...' name='newPost' component={TextArea}/>
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

