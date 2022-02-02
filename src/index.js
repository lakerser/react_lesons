import React from 'react';
import reportWebVitals from './reportWebVitals';
import state, {addMessage, addPost, onChangeMessage, subscribe, updateNewPostText} from "./state/state";
import ReactDOM from "react-dom";
import App from "./App";


 let rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App addMessage={addMessage} updateNewPostText={updateNewPostText} state={state} addPost={addPost} onChangeMessage={onChangeMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
