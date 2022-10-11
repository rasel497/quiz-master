import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='quiz-nav' herf="/">Quiz-Master</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav className='nav-link'>
                        <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/home">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/topics">Topics</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/statics">Statics</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/blog">Blog</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/about">About</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;