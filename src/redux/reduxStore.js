import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profileReducer";
import DialogReducer from "./dialogReducer";
import UserReducer from "./userReducer";

let reducers = combineReducers({
    Profile: ProfileReducer,
    Dialogs: DialogReducer,
    usersPage: UserReducer
})

let store = createStore(reducers)




export default store


