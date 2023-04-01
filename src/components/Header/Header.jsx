import React from 'react';
import './Header.css'
import logo from "../images/person.jpg"
const Header = () => {
    return (
        <div className='header'>
                <h1>Knowledge Cafe</h1>
                 {/* <img className='navPersonPic' src="./images/person.jpg" alt="" /> */}
                <img className='navPersonPic' src={logo} alt="" />
        </div>
    );
};

export default Header;
