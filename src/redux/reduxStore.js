import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profileReducer";
import DialogReducer from "./dialogReducer";
import UserReducer from "./userReducer";
import authReducer from "./auth-reduser";

let reducers = combineReducers({
    Profile: ProfileReducer,
    Dialogs: DialogReducer,
    usersPage: UserReducer,
    auth: authReducer
})

let store = createStore(reducers)
window.store=store



export default store


