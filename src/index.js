import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./state/state";


 let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App addMessage={store.addMessage.bind(store)} state={state} updateNewPostText={store.updateNewPostText.bind(store)}  addPost={store.addPost.bind(store)} onChangeMessage={store.onChangeMessage.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
