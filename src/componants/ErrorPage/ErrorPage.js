import React from 'react';
import { useRouteError } from 'react-router-dom';
import './ErrorPage.css'


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)

    return (
        <div>
            <div className="error-imgg">
                <img src="/404image.webp" alt="" />
            </div>
            <div className="error">
                <h3>Ops! An Error Ocurred!</h3>
            </div>

        </div>
    );
};

export default ErrorPage; 