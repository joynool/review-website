import React from 'react';

/*------------------------------------------------
                Contact us panel
--------------------------------------------------*/
const Contacts = () =>
{
    return (
        <div className="container text-center p-5">
            <h2 className="text-success m-5">CONTACT US</h2>
            <p className="bg-light border border-success rounded p-5">Contact Us to have your price quotation, know about our calendar, if you are a company or a private we will always find the best solution for you.  Every day we receive people from all over the world for our cooking classes as you can see from the photos on our instagram profile, come and visit us too!</p>
            <h4>email: info@bakingschool.com</h4>
            <p>Follow us on Instragram and facebook or email me, I’ll reply you in few minutes.</p>
            <div>
                <i class="fab fa-instagram fs-1"></i>
                <i class="fab fa-facebook-square fs-1 ms-3"></i>
            </div>
        </div>
    );
};

export default Contacts;