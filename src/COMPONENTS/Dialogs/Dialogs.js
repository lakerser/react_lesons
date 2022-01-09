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
    let addMassage = () => {
        let text = addMessageEl.current.value;
        alert(text);

    }
    let addMessageEl = React.createRef();
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>

                {dialogsItems}


            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.textArr}>
                <textarea className={s.obg} ref={addMessageEl} id="" cols="15" rows="2"></textarea>
                <button className={s.obg} onClick={addMassage}>send</button>
            </div>

        </div>);


}
export default Dialogs;

