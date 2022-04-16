import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setPage,
    setPreloader,
    setUsers,
    setTotalUserCount,
    unfollow
} from "../../redux/userReducer";
import Users from "./UsersClass";
import axios from "axios";

class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.setPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials:true})
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setPreloader(false)
                this.props.setTotalUserCount(response.data.totalCount)

            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setPreloader(true)

        this.props.setPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {withCredentials:true})
            .then(response => {
                this.props.setUsers(response.data.items)
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
        isLoading: state.usersPage.isLoading

    }

}


export let UsersContainer = connect(mapStateToProps,
    {setTotalUserCount, unfollow, follow, setUsers, setPage, setPreloader}
)(UsersAPI)


export default UsersContainer;