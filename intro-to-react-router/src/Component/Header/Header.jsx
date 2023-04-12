import React from 'react';
import './Header.css';
//  import {ActiveLink} from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
//
const Header = () => {
    return (
        <div style={{backgroundColor:'blue',padding:'10px'}}>
            <div className='ActiveLink' style={{margin:'10px'}}>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/friends">Friends</ActiveLink>
                <ActiveLink to ="/posts">Posts</ActiveLink>
                <ActiveLink to="/about">Abouot</ActiveLink>
                <ActiveLink to="/contact">Contact</ActiveLink>
                <ActiveLink to="/login">login</ActiveLink>
            </div>
        </div>
    );
};

export default Header;