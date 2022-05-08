import React from "react";
import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPost";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        post: state.Profile.posts,
        newPostText: state.Profile.newPostText
    }
}
const MyPostsContainer = connect(mapStateToProps, {addPostActionCreator})(MyPosts)


export default MyPostsContainer;