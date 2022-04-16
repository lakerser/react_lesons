import React from 'react';
import Preloader from "../../common/preloader/loader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>

            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div >
                <img src={props.profile.photos.large} alt=""/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;