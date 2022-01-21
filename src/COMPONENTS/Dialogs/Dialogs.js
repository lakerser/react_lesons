import React from "react";
import s from './Dialogs.module.css'
import Message from "./message/message";
import DialogItem from "./dialogItem/DialogsItems";
import {sendNewMessageActionCreator, updateNewMessageActionCreator} from "../../state/dialogReduser";


const Dialogs = (props) => {
    let dialogsItems = props.state.Dialogs.MyDialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    );

    let messagesElements = props.state.Dialogs.MyMessages.map(el =>
        <Message message={el.message}/>
    );
    let addMassage = () => {
        let text = props.state.NewMessageText;
        props.dispatch(sendNewMessageActionCreator(text))

    }
    // let addMessageEl = React.createRef();

    let onMessageChange = (e) => {
        let message = e.target.value
        console.log(message)
        props.dispatch(updateNewMessageActionCreator(message))
    }
    const placeholder = 'Enter your message';
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                {dialogsItems}


            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.textArr}>
                <textarea placeholder={placeholder}
                          className={s.obg}
                          onChange={onMessageChange}
                          // ref={addMessageEl}
                          value={props.state.Dialogs.NewMessageText}/> {/*i fixed value of text here*/}
                <button className={s.obg} onClick={addMassage}>send</button>
            </div>

        </div>);


}
export default Dialogs;

