import React, {} from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className='header'>
            <img src="https://i.ibb.co/0sr6jKC/mylogo-Copy.png"/>

            <div className='loginBlock'>
                {props.isAuthed? props.login:
                <NavLink to={'/login'}>login</NavLink>
                }
            </div>
        </header>

    );
}
export default Header;