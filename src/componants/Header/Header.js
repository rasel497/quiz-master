import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <Link to='/'>Home</Link>
                <Link to='/topics'>Topics</Link>
                <Link to='/statics'>Statics</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;