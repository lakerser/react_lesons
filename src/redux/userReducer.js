const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_page = 'SET_CURRENT_page'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 2
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
        case SET_CURRENT_page:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.TotalCount
            }


        default:
            return state

    }

};


export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const followAC = (userId) => ({type: FOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setPageAC = (currentPage) => ({type: SET_CURRENT_page, currentPage})
export const setTotalCountAC = (TotalCount) => ({type: SET_TOTAL_USERS_COUNT, TotalCount})


export default UserReducer;