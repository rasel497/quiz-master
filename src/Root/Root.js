import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../componants/Home/Home';
// import Header from '../componants/Header/Header';
import NavLinks from '../componants/NavLinks/NavLinks';

const Root = () => {
    return (
        <div>
            <NavLinks></NavLinks>
            {/* <Header></Header> */}
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;