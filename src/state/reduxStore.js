import {combineReducers, createStore} from "redux";
import profileReduser from "./profileReduser";
import dialogReduser from "./dialogReduser";

let reducers = combineReducers(
    {
        Profile:profileReduser,
        Dialogs:dialogReduser
    }
)
let store = createStore(reducers)

export default store
