import React from "react";
import s from './Dialogs.module.css'
import Message from "./message/message";
import DialogItem from "./dialogItem/DialogsItems";

const Dialogs = (props) => {
    let dialogsItems = props.state.Dialogs.MyDialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    );

    let messagesElements = props.state.Dialogs.MyMessages.map(el =>
        <Message message={el.message}/>
    );


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                {dialogsItems}


            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.textArr}>
                <textarea className={s.obg} onChange={(e)=>props.onChangeMessage(e.target.value)} value={props.state.Dialogs.newMessage}> </textarea>
                <button className={s.obg} onClick={props.addMessage}>send</button>
            </div>

        </div>);


}
export default Dialogs;

