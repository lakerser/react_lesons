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
    let onClick = () => {
        let action = {type:'ADD-MESSAGE'};
        props.dispatch(action)
    }
    let onChange = (e)=>{
        let text =  e.target.value
        let action = {type:'UPDATE-NEW-MESSAGE-TEXT', messageText: text};
        props.dispatch(action)
    }


    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                {dialogsItems}


            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.textArr}>
                <textarea className={s.obg} onChange={onChange}
                          value={props.state.Dialogs.newMessage}> </textarea>
                <button className={s.obg} onClick={onClick}>send</button>
            </div>

        </div>);


}
export default Dialogs;

