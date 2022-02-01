import React from 'react';
import MyPosts from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/profileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} addPost={props.addPost} />
        </div>
    )
}

export default Profile;