import React from 'react';
import { Outlet } from 'react-router-dom';
import NavLinks from '../componants/NavLinks/NavLinks';

const Root = () => {
    return (
        <div>
            <NavLinks></NavLinks>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;