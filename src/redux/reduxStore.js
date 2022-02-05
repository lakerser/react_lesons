import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profileReducer";
import DialogReducer from "./dialogReducer";

let reducers = combineReducers({
    Profile: ProfileReducer,
    Dialogs: DialogReducer,
})

let store = createStore(reducers)



export default store