import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../images/WeCookLogo.png'

export default function NavigationBar() {
    return (
        <>
            <Navbar sticky="top" bg="light">
                <Navbar.Brand href="WeCook" style={{ width: "calc(100%/7)" }}>
                    <img
                        src={logo}
                        width="175"
                        height="40" 
                        className="d-inline-block align-top"
                        alt="We Cook Logo"
                    />    
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/recipe">Recipes</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="/login">Log In</Nav.Link>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}
