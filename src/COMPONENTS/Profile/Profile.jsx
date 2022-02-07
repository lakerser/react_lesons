import React from 'react';
import ProfileInfo from "./ProfileInfo/profileInfo";
import MyPostsContainer from "./MyPost/MyPostContainer";

const Profile = () => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;