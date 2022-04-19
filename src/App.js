import React, {} from 'react';
import './App.css';
import Navbar from "./COMPONENTS/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import DialogsContainerR from "./COMPONENTS/Dialogs/DialogsContainer";
import UsersContainer from "./COMPONENTS/users/usersContainer";
import ProfileContainer from "./COMPONENTS/Profile/ProfileInfo/profileContainer";
import HeaderContainer from "./COMPONENTS/Header/headerContainer";
import LoginPage from "./COMPONENTS/login/Login";


const App = () => {

    return (
        <div className="app_wriper">
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wriper-content'>
                <Routes>
                    <Route path="/profile/:userId" element={<ProfileContainer/>}/>

                    <Route path="/dialogs" element={<DialogsContainerR/>}/>

                    <Route path="/Users" element={<UsersContainer/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
            </div>

        </div>
    );
};


export default App;
