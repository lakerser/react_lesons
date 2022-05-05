import React from 'react';
import ProfileInfo from "./ProfileInfo/profileInfo";
import MyPostsContainer from "./MyPost/MyPostContainer";
import {updateStatusTC} from "../../redux/profileReducer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profileId={props.profileId} updateStatusTC={props.updateStatusTC} status={props.status} profile={props.profile} />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;