import React from "react";
import s from './Dialogs.module.css'
import Message from "./message/message";
import DialogItem from "./dialogItem/DialogsItems";
import {Field, reduxForm} from "redux-form";
import {maxLength30, maxLengthCreator, requiredField} from "../../utils/validation/validators";
import {TextArea} from "../common/formControls/formControls";

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
let maxLength20 = maxLengthCreator(20);

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[requiredField, maxLength20]} component={TextArea} name='newMessageBody'
                   placeholder='message...' type={'text'}
                   value={props.newMessage}> </Field>
            <button>create message</button>
        </form>
    )
}

const ReduxMessageForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)


export default Dialogs;

