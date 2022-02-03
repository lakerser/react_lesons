import React from 'react';
import MyPosts from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/profileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts   state={props.state}
                      dispatch={props.dispatch}
            />

        </div>
    )
}

export default Profile;