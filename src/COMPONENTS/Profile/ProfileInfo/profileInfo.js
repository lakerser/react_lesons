import React from 'react';
import Preloader from "../../common/preloader/loader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    debugger
    return (
        <div>
            <div >
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus profileId={props.profileId} updateStatusTC={props.updateStatusTC} status={props.status}/>
            </div>
        </div>
    )
}

export default ProfileInfo;