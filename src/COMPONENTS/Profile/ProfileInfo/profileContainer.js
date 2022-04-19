import React from 'react';
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../redux/profileReducer";
import {withRouter} from "../../../HOC/withRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.router.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}   `)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }


    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }

}


let mapStateToProps = (state) => ({
    profile: state.Profile.profile

})
export default compose(
    connect(mapStateToProps, {setUserProfile}),
    withRouter
)(ProfileContainer)
