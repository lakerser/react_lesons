import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setPage,
    setUsers,
    unfollow,
    toggleIsFollowingProgress,
    getUsersCreatorTC,
    unfollowCreatorTC,
    followCreatorTC,

} from "../../redux/userReducer";
import Users from "./UsersClass";

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)


    }

    render() {
        return (<>
                <Users
                    {...this.props}
                    onPageChanged={this.onPageChanged}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress


    }

}


export let UsersContainer = connect(
    mapStateToProps,
    {
        unfollow, follow, setUsers,
        setPage, toggleIsFollowingProgress,
        getUsers: getUsersCreatorTC,
        unfollowTC:unfollowCreatorTC,
        followTC:followCreatorTC,
    }
)(UsersAPI)


export default UsersContainer;