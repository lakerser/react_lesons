import React, {} from 'react';
import './App.css';
import Header from "./COMPONENTS/Header/Header";
import Navbar from "./COMPONENTS/Navbar/Navbar";
import Profile from "./COMPONENTS/Profile/Profile";
import { Routes, Route} from "react-router-dom";
import DialogsContainer from "./COMPONENTS/Dialogs/DialogsContainer";


const App = () => {

    return (
        <div className="app_wriper">
            <Header/>
            <Navbar/>
            <div className='app-wriper-content'>
                <Routes>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/dialogs" element={<DialogsContainer/>}/>
                </Routes>
            </div>

        </div>
    );
};

export default App;