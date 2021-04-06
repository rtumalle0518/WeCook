import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

export default function Navigationbar() {
    return (
        <>
            <Navbar expand="lg" bg="light">
                <Navbar.Brand to='/WeCook'>WeCook</Navbar.Brand>
            </Navbar>
            
        </>
    )
}
