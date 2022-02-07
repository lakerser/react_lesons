import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPost";
import {connect} from "react-redux";


// const MyPostsContainer = () => {
//     // let state = props.store.getState()
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState()
//
//                 let onChangeAction = (text) => {
//                     let action = onPostChangeActionCreator(text)
//                     store.dispatch(action)
//                 }
//                 let onClickk = () => {
//                     let action = addPostActionCreator();
//                     store.dispatch(action)
//                 }
//                 return (<MyPosts
//                         post={state.Profile.posts}
//                         newPostText={state.Profile.newPostText}
//                         updateNewPostText={onChangeAction}
//                         addPost={onClickk}/>
//                 )
//
//             }
//             }
//
//         </StoreContext.Consumer>
//     )
// }
const mapStateToProps = (state) => {
    return {
        post: state.Profile.posts,
        newPostText: state.Profile.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    let onChangeAction = (text) => {
        let action = onPostChangeActionCreator(text)
        dispatch(action)
    }
    let onClickk = () => {
        let action = addPostActionCreator();
        dispatch(action)
    }
    return {
        updateNewPostText: onChangeAction,
        addPost: onClickk
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;