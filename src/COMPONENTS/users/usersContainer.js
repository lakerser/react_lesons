import React from 'react';
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/userReducer";
import Users from "./UsersClass";

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUserCount: state.usersPage.totalUserCount,
		currentPage : state.usersPage.currentPage,
		heko: 'dda'
	}

}
let mapDispatchToProps = (dispatch) => {
	return{
		follow: (userId)=>{
			dispatch(followAC(userId))
		},
		unFollow: (userId)=>{
			dispatch(unfollowAC(userId))
		},
		setUsers: (users)=>{
			dispatch(setUsersAC(users))
		},

	}

}
export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;