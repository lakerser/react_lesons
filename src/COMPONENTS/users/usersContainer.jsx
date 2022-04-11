import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setPageAC,
    setPreloaderAC,
    setTotalUserCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/userReducer";
import Users from "./UsersClass";
import axios from "axios";
import Preloader from "../common/preloader/loader";

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.setPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setPreloader(false)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setPreloader(true)

        this.props.setPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setPreloader(false)



            })

    }

    render() {
        return (<>
                {this.props.isLoading?<Preloader/>:null}
                <Users
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    totalUserCount={this.props.totalUserCount}
                    follow={this.props.follow}
                    unfollow={this.props.unFollow}
                    onPageChanged={this.onPageChanged}
                    setPreloader={this.props.setPreloader}

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
        isLoading:state.usersPage.isLoading

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
        },
        setPreloader: (loader) => {
            dispatch(setPreloaderAC(loader))
        }


    }

}


export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)


export default UsersContainer;