import React from "react";
import s from './Dialogs.module.css'
import Message from "./message/message";
import DialogItem from "./dialogItem/DialogsItems";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {


    let dialogsItems = props.MyDialogs.map((dialog, index) =>
        <DialogItem key={index + 1} name={dialog.name} id={dialog.id}/>
    );

    let messagesElements = props.MyMessages.map((el, index) =>
        <Message key={index + 1} message={el.message}/>
    );


    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }


    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                {dialogsItems}


            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <ReduxMessageForm onSubmit={addNewMessage}/>
            </div>

        </div>);


}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newMessageBody' placeholder='message...' type={'text'}
                   value={props.newMessage}> </Field>
            <button>create message</button>
        </form>
    )
}

const ReduxMessageForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)


export default Dialogs;

