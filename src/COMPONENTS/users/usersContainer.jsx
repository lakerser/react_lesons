import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setPage,
    setPreloader,
    setUsers,
    setTotalUserCount,
    unfollow, toggleIsFollowingProgress
} from "../../redux/userReducer";
import Users from "./UsersClass";
import {userAPI} from "../../api/api";

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.setPreloader(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setPreloader(false)
            this.props.setTotalUserCount(data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setPreloader(true)
        this.props.setPage(pageNumber)

        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setPreloader(false)
            })

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
        followingInProgress:state.usersPage.followingInProgress


    }

}


export let UsersContainer = connect(mapStateToProps,
    {setTotalUserCount, unfollow, follow, setUsers, setPage, setPreloader,toggleIsFollowingProgress}
)(UsersAPI)


export default UsersContainer;