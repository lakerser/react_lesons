import React,{} from 'react';
import Nav from './Navbar.module.css'
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return(
        <nav className={Nav.nav}>
            <div>
                <div className={Nav.item}>
                    <NavLink className={navData=>navData.isActive ? Nav.active : Nav.item} to="/profile">Profile</NavLink>

                </div>

                <div className={Nav.item}>
                    <NavLink className={navData=>navData.isActive ? Nav.active : Nav.item} to="/dialogs">Massages</NavLink>
                </div>

                <div className={Nav.item}>
                    <NavLink  to="/News">News</NavLink>
                </div>

                <div className={Nav.item}>
                    <NavLink to="/Music">Music</NavLink>
                </div>

                <div className={Nav.item}>
                    <NavLink  to="/Settings">Settings</NavLink>
                </div>


            </div>
        </nav>

    );
}
export default  Navbar;