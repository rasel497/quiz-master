import React from 'react';
import NavLinks from '../NavLinks/NavLinks';
import './Header.css'

const Header = () => {
    return (

        <div className='container'>
            <div className="banner">
                <div className="content">
                    <h1>DESIGN AND DEVELOPMENT</h1>
                    <p>Subscribe Rh-Advanced Tutorials YouTube Channel to watch more videos, <br /> Press the bell icon to get
                        latest updates.</p>
                    <div>
                        <button type="button"><span className="btn-spn"></span>WATCH MORE</button>
                        <button type="button"><span className="btn-spn"></span>SUBSCRIBE NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;