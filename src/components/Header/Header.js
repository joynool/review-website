import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () =>
{
    return (
        <div className="sticky-lg-top">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/home" className="ms-5 text-success fs-2 fw-bold">
                    <sub>b</sub> a k ! n <sub>g</sub>
                    <span className="fs-4 fw-light ms-3">School</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '200px' }}
                        navbarScroll
                    >
                        <Link to="/home">
                            <Button variant="outline-secondary" className="border-0 fs-5 fw-light me-2">
                                Home
                            </Button>
                        </Link>
                        <Link to="/courses">
                            <Button variant="outline-secondary" className="border-0 fs-5 fw-light me-2">
                                Courses
                            </Button>
                        </Link>
                        <Link to="/contacts">
                            <Button variant="outline-secondary" className="border-0 fs-5 fw-light me-2">
                                Contacts
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="outline-secondary" className="border-0 fs-5 fw-light me-2">
                                About
                            </Button>
                        </Link>
                    </Nav>
                    <Form className="d-flex me-lg-5">
                        <FormControl
                            type="search"
                            placeholder="Find your course"
                            className="mr-2 rounded-3"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" className="ms-2 rounded-3">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;