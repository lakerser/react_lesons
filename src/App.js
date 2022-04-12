import React, {} from 'react';
import './App.css';
import Header from "./COMPONENTS/Header/Header";
import Navbar from "./COMPONENTS/Navbar/Navbar";
import Profile from "./COMPONENTS/Profile/Profile";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./COMPONENTS/Dialogs/DialogsContainer";
import Users from "./COMPONENTS/users/Users";
import UsersContainer from "./COMPONENTS/users/usersContainer";
import ProfileContainer from "./COMPONENTS/Profile/ProfileInfo/profileContainer";


const App = () => {

    return (
        <div className="app_wriper">
            <Header/>
            <Navbar/>
            <div className='app-wriper-content'>
                <Routes>
                    <Route path="/profile/:userId" element={<ProfileContainer/>}/>

                    <Route path="/dialogs" element={<DialogsContainer/>}/>

                    <Route path="/Users" element={<UsersContainer/>}/>
                </Routes>
            </div>

        </div>
    );
};

export default App;