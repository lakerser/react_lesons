import React, {} from 'react';
import './App.css';
import Header from "./COMPONENTS/Header/Header";
import Navbar from "./COMPONENTS/Navbar/Navbar";
import Profile from "./COMPONENTS/Profile/Profile";
import Dialogs from "./COMPONENTS/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app_wriper">
                <Header/>
                <Navbar/>
                <div className='app-wriper-content'>
                    <Routes>
                        <Route path="/dialogs" element={<Dialogs
                            state={props.state}
                            dispatch={props.dispatch}
                           />}/>
                        <Route path="/profile" element={<Profile
                            state={props.state}
                            dispatch={props.dispatch}
                            />}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
};

export default App;