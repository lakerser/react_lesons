import React, {} from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logOut} from "../../redux/auth-reduser";


const Header = (props) => {
    return (
        <header className='header'>
            <img alt='#' src="https://i.ibb.co/0sr6jKC/mylogo-Copy.png"/>

            <div className='loginBlock'>
                {props.isAuthed ?
                    <div>
                        {props.login}
                        -
                        <button onClick={props.logOut}>Logout</button>
                    </div>
                    :
                    <NavLink to={'/login'}>login</NavLink>
                }
            </div>
        </header>

    );
}
export default connect(null, {logOut})(Header);