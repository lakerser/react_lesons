import React, {} from 'react';
import './App.css';
import Header from "./COMPONENTS/Header/Header";
import Navbar from "./COMPONENTS/Navbar/Navbar";
import Profile from "./COMPONENTS/Profile/Profile";
import Dialogs from "./COMPONENTS/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {onChangeMessage} from "./state/state";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app_wriper">
                <Header/>
                <Navbar/>
                <div className='app-wriper-content'>
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs
                            addMessage={props.addMessage}
                            state={props.state}
                            onChangeMessage={props.onChangeMessage}/>}/>
                        <Route path="/profile" element={<Profile
                            updateNewPostText={props.updateNewPostText}
                            Profile={props.state.Profile}
                            addPost={props.addPost}/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
};

export default App;