import React from "react";
import {addMessageActionCreator, onChangeTextMessageActionCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                     let state = store.getState().Dialogs
//
//                     let onChangeTextMessage = (text) => {
//
//                         const action = onChangeTextMessageActionCreator(text);
//                         store.dispatch(action)
//                     }
//                     let addMessage = () => {
//                         const action = addMessageActionCreator();
//                         store.dispatch(action)
//                     }
//                     return (
//                         <Dialogs newMessage={state.newMessage}
//                                  MyDialogs={state.MyDialogs}
//                                  MyMessages={state.MyMessages}
//                                  state={state}
//                                  sendMessage={addMessage}
//                                  updateNewMessageText={onChangeTextMessage}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
//
//
// }
let mapStateToProps = (state) => {
    return {
        newMessage: state.Dialogs.newMessage,
        MyDialogs: state.Dialogs.MyDialogs,
        MyMessages: state.Dialogs.MyMessages
    }
}

let mapDispatchToProps = (dispatch) => {
    let onChangeTextMessage = (text) => {

        const action = onChangeTextMessageActionCreator(text);
        dispatch(action)

    }

    let addMessage = () => {
        const action = addMessageActionCreator();
        dispatch(action)
    }
    return {
        updateNewMessageText: onChangeTextMessage,
        sendMessage: addMessage

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;

