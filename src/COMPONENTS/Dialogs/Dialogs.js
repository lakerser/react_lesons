import React from "react";
import s from './Dialogs.module.css'
import Message from "./message/message";
import DialogItem from "./dialogItem/DialogsItems";
import {addMessageActionCreator, onChangeTextMessageActionCreator} from "../../redux/dialogReducer";

const Dialogs = (props) => {
    let dialogsItems = props.state.Dialogs.MyDialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    );

    let messagesElements = props.state.Dialogs.MyMessages.map(el =>
        <Message message={el.message}/>
    );

   let onChangeTextMessage = (e)=>{
       let text = e.target.value
       const action = onChangeTextMessageActionCreator(text);
       props.dispatch(action)
    }
    let addMessage = ()=> {
        const action = addMessageActionCreator() ;
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
<div>
    <textarea value={props.state.Dialogs.newMessage} onChange={onChangeTextMessage}> </textarea>
    <button onClick={addMessage}>create message </button>
</div>

        </div>);


}
export default Dialogs;

