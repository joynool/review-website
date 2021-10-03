import React from 'react';
import err from '../../images/404.png';

const NotFound = () =>
{
    return (
        <div className="text-center bg-light rounded-3 m-5 p-5">
            <img className="img-fluid" src={err} alt="404 - page not found" />
        </div>
    );
};

export default NotFound;