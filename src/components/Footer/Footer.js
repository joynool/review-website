import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () =>
{
    /*------------------------------------------------
                        Footer panel
    --------------------------------------------------*/
    return (
        <div className="mt-3">
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand className="text-success fs-6 fw-light mx-auto">&copy; Baking School, 2021</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;