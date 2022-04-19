import React from "react";
import s from './Dialogs.module.css'
import Message from "./message/message";
import DialogItem from "./dialogItem/DialogsItems";

const Dialogs = (props) => {


    let dialogsItems = props.MyDialogs.map((dialog, index) =>
        <DialogItem key={index + 1} name={dialog.name} id={dialog.id}/>
    );

    let messagesElements = props.MyMessages.map((el, index) =>
        <Message key={index + 1} message={el.message}/>
    );

    let onChangeTextMessage = (e) => {
        let text = e.target.value
        props.onChangeTextMessage(text)
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
                <textarea value={props.newMessage} onChange={onChangeTextMessage}> </textarea>
                <button onClick={props.addMessage}>create message</button>
            </div>

        </div>);


}
export default Dialogs;

