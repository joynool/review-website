import React from 'react';

/*------------------------------------------------
                About us panel
--------------------------------------------------*/
const About = () =>
{
    return (
        <div className="container text-center p-5">
            <h2 className="text-success m-5">ABOUT US</h2>
            <h3 className="text-success m-5 fw-light">We share knowledge with the world</h3>
            <p className="bg-light border border-success rounded p-5">Baking School is a full-service website that provides you with industry information in one convenient location. We're here to help you identify new trends, learn about solutions that can have an impact on your business, as well as stay up-to-date on what's happening in the baking world. Our goal is to provide you with baking industry information you need to know  — in one place</p>
            <div>
                <p>Follow Us</p>
                <i class="fab fa-instagram fs-1"></i>
                <i class="fab fa-facebook-square fs-1 ms-3"></i>
            </div>
        </div>
    );
};

export default About;