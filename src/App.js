import React, {} from 'react';
import './App.css';
import Header from "./COMPONENTS/Header/Header";
import Navbar from "./COMPONENTS/Navbar/Navbar";
import Profile from "./COMPONENTS/Profile/Profile";
import Dialogs from "./COMPONENTS/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {addMessage, changeNewMessageT, changeNewPostT} from "./state/state";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app_wriper">
                <Header/>
                <Navbar/>
                <div className='app-wriper-content'>
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs state={props.state}
                                                                 addMessage={props.addMessage}
                                                                 changeNewMessageT={props.changeNewMessageT}
                                                                dispatch={props.dispatch}
                        />}/>
                        <Route path="/profile" element={<Profile state={props.state.Profile}
                                                                 dispatch={props.dispatch}


                        />}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
};

export default App;