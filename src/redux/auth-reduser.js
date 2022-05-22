import {HeaderAPI} from "../api/api";

let SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthed: false,

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }
}

export const setAuthUserData = (id, email, login,isAuthed) => ({type: SET_USER_DATA, data: {id, email, login,isAuthed}})
export const getAuth = () => (dispatch) => {
    HeaderAPI.me()
        .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login,true))
                }
            }
        )
}
export const logination = (email, password, rememberMe) => (dispatch) => {
    HeaderAPI.Login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuth())
            }
        })
}
export const logOut = () => (dispatch) => {
    HeaderAPI.Logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null,null,null,false))

            }
        })
}
export default authReducer