import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./profileReducer";
import DialogReducer from "./dialogReducer";
import UserReducer from "./userReducer";
import authReducer from "./auth-reduser";
import thunk from 'redux-thunk'

let reducers = combineReducers({
    Profile: ProfileReducer,
    Dialogs: DialogReducer,
    usersPage: UserReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunk))
window.store=store



export default store


