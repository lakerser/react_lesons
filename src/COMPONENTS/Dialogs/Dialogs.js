import React from "react";
import s from './Dialogs.module.css'
import Message from "./message/message";
import DialogItem from "./dialogItem/DialogsItems";
import { sendNewMessageActionCreator} from "../../state/state";
import {updateNewMessageActionCreator} from "../../state/state";

const Dialogs = (props) => {
    let dialogsItems = props.state.Dialogs.MyDialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    );

    let messagesElements = props.state.Dialogs.MyMessages.map(el =>
        <Message message={el.message}/>
    );
    let addMassage = () => {
        let text = addMessageEl.current.value;
       props.dispatch( sendNewMessageActionCreator(text))

    }
    let addMessageEl = React.createRef();

    let onMessageChange = ()=>{
      let message = addMessageEl.current.value
        console.log(message)
       props.dispatch( updateNewMessageActionCreator(message))
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
                <textarea className={s.obg} onChange={onMessageChange} ref={addMessageEl} value={props.state.Dialogs.NewMessageText}/>   {/*i fixed value of text here*/}
                <button className={s.obg} onClick={addMassage}>send</button>
            </div>

        </div>);


}
export default Dialogs;

