const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_PAGE = 'SET-PAGE'
const SET_TOTAL_COUNT='SET-TOTAL-COUNT'
let initialState = {
	users: [	],
	currentPage:1,
	pageSize:5,
	totalUserCount:0
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
				users:  action.users
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

		default:
			return state

	}

};


export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const followAC = (userId) => ({type: FOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setPageAC = (page) => ({type: SET_PAGE, page})
export const setTotalUserCountAC = (count) => ({type: SET_TOTAL_COUNT, count})


export default UserReducer;