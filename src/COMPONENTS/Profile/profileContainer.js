import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC, setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "../../HOC/withRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfileTC(this.props)
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
    connect(mapStateToProps, {getProfileTC, setUserProfile}),
    withRouter
)(ProfileContainer)
