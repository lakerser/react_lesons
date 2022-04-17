import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_PAGE = 'SET-PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const SWITCH_LOADER = "SWITCH-LOADER"
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'
let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 100,
    totalUserCount: 0,
    isFetching: false,
    followingInProgress: []
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {
                                ...u, followed: true
                            }
                        }
                        return u

                    }
                )
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {
                                ...u, followed: false
                            }
                        }
                        return u

                    }
                )
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUserCount: action.count
            }
        case SWITCH_LOADER:
            return {
                ...state,
                isLoading: action.loader
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : [...state.followingInProgress.filter((id) => id !== action.userId)]

            }
        default:
            return state

    }

};


export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const follow = (userId) => ({type: FOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setPage = (page) => ({type: SET_PAGE, page})
export const setTotalUserCount = (count) => ({type: SET_TOTAL_COUNT, count})
export const setPreloader = (loader) => ({type: SWITCH_LOADER, loader})
export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})


export const getUsersCreatorTC = (currentPage, pageSize) => {
    return (dispatch) => {


        dispatch(setPreloader(true))
        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setPreloader(false))
            dispatch(setTotalUserCount(data.totalCount))
        })
    }
}
export const unfollowCreatorTC = (userId)=>(dispatch)=>{
    dispatch(toggleIsFollowingProgress(true, userId))
    userAPI.unfollowAPI(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userId))

            }
            dispatch(toggleIsFollowingProgress(false, userId))


        })

}
export const followCreatorTC = (userId)=>(dispatch)=>{
    dispatch(toggleIsFollowingProgress(true, userId))
    userAPI.followAPI(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId))

            }
            dispatch(toggleIsFollowingProgress(false, userId))


        })

}
export default UserReducer;