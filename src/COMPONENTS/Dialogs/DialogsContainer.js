import React from "react";
import {
    addMessage,
    onChangeTextMessage,
} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        newMessage: state.Dialogs.newMessage,
        MyDialogs: state.Dialogs.MyDialogs,
        MyMessages: state.Dialogs.MyMessages,

    }
}







export default compose(
    connect(mapStateToProps, { onChangeTextMessage, addMessage}),
    withAuthRedirect
)
(Dialogs);

