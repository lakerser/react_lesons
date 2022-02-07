import React from "react";
import s from './Dialogs.module.css'
import Message from "./message/message";
import DialogItem from "./dialogItem/DialogsItems";

const Dialogs = (props) => {
    let dialogsItems = props.MyDialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    );

    let messagesElements = props.MyMessages.map(el =>
        <Message message={el.message}/>
    );

    let onChangeTextMessage = (e) => {
        let text = e.target.value
        props.updateNewMessageText(text)
    }
    let addMessage = () => {

        props.sendMessage()
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
                <button onClick={addMessage}>create message</button>
            </div>

        </div>);


}
export default Dialogs;

