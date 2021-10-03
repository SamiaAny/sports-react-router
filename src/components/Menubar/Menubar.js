import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Menubar.css'

const Menubar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="py-4" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            
                            <NavLink className="nav-link" role="button" to="/home">Home</NavLink>
                            <NavLink className="nav-link" role="button" to="/allteams">Sports</NavLink>
                            <NavLink className="nav-link" role="button" to="/aboutus">About Us</NavLink>
                            <NavLink className="nav-link" role="button" to="/contacts">Contact Us</NavLink>       
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menubar;