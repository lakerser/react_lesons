import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, changeNewMessageT, changeNewPostT} from "./state/state";

export let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} changeNewMessageT={changeNewMessageT} addPost={addPost} addMessage={addMessage} changeNewPostT={changeNewPostT}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}



