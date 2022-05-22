import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "../../HOC/withRouter";
import {compose} from "redux";
import withAuthRedirect from "../../HOC/WithAuthRedirect";
import {getProfileTC, getStatusTC, updateStatusTC} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let profileId = this.props.router.params.userId || this.props.loginedUserId;
           this.props.getProfileTC(profileId)
            this.props.getStatusTC(profileId)
    }


    render() {
        return (
            <div>
                <Profile profileId={this.props.router.params.userId || this.props.loginedUserId }{...this.props}/>
            </div>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.Profile.profile,
    status : state.Profile.status,
    loginedUserId: state.auth.id,
    isAuthed: state.auth.isAuthed

})
export default compose(
    withRouter,
    withAuthRedirect,

    connect(mapStateToProps, {getProfileTC,getStatusTC,updateStatusTC}),


)(ProfileContainer)
