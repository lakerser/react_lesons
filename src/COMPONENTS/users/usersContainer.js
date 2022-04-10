import React from 'react';
import {connect} from "react-redux";
import {followAC, setPageAC, setTotalUserCountAC, setUsersAC, unfollowAC} from "../../redux/userReducer";
import Users from "./UsersClass";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount

    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setPage: (page) => {
            dispatch(setPageAC(page))
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUserCountAC(count))
        }


    }

}
export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;