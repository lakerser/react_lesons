import React from "react";
import {addMessageActionCreator, onChangeTextMessageActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().Dialogs

                    let onChangeTextMessage = (text) => {

                        const action = onChangeTextMessageActionCreator(text);
                        store.dispatch(action)
                    }
                    let addMessage = () => {
                        const action = addMessageActionCreator();
                        store.dispatch(action)
                    }
                    return (
                        <Dialogs newMessage={state.newMessage}
                                 MyDialogs={state.MyDialogs}
                                 MyMessages={state.MyMessages}
                                 state={state} sendMessage={addMessage}
                                 updateNewMessageText={onChangeTextMessage}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )


}
export default DialogsContainer;

