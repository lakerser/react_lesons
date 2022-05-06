import {HeaderAPI} from "../api/api";

let SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthed: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuthed: true

            }
        default:
            return state
    }
}

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const getAuth = () => (dispatch) => {
    HeaderAPI.me()
        .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login))
debugger
                }
            }
        )
}
export default authReducer