import React from 'react';
import { Outlet } from 'react-router-dom';
// import Header from '../componants/Header/Header';
import NavLinks from '../componants/NavLinks/NavLinks';

const Root = () => {
    return (
        <div>
            <NavLinks></NavLinks>
            {/* <Header></Header> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;