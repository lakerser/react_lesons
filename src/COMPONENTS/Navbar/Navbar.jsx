import React,{} from 'react';
import Nav from './Navbar.module.css'
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return(
        <nav className={Nav.nav}>
            <div>
                <div className={Nav.item}>
                    <NavLink className={navData=>navData.isActive ? Nav.active : Nav.item} to="/Profile">Profile</NavLink>

                </div>

                <div className={Nav.item}>
                    <NavLink className={navData=>navData.isActive ? Nav.active : Nav.item} to="/Dialogs">Massages</NavLink>
                </div>
                <div className={Nav.item}>
                    <NavLink className={navData => navData.isActive ? Nav.active : Nav.item}
                             to="/Users">Users</NavLink>
                </div>

                <div className={Nav.item}>
                    <NavLink  to="/Dialogs">News</NavLink>
                </div>

                <div className={Nav.item}>
                    <NavLink to="/Dialogs">Music</NavLink>
                </div>

                <div className={Nav.item}>
                    <NavLink  to="/Dialogs">Settings</NavLink>
                </div>


            </div>
        </nav>

    );
}
export default  Navbar;