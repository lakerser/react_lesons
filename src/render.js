import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from "./state/state";

export let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App updateNewPostText={updateNewPostText} state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}



