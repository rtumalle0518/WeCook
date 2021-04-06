import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import logo from '../images/WeCookLogo.png'
export default function Navigationbar() {
    return (
        <>
            <Navbar sticky="top" bg="light">
                <Navbar.Brand href="WeCook">
                    <img
                        src={logo}
                        width="175"
                        height="40" 
                        className="d-inline-block align-top"
                        alt="We Cook Logo"
                    />    
                </Navbar.Brand>
            </Navbar>
            
        </>
    )
}
