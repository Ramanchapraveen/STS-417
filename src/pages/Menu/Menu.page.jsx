import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import ToggleButton from '../ToggleComponent/ToggleButton';
export default function Menu( ) {
    
    return (
        <div className="card m-3 ">
        <Navbar bg="light"  expand="lg">
            <Navbar.Brand href="/">Adventure Tours</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav " >
                <Nav className="mr-auto" >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/destinations">Destination</Nav.Link>
                    {/* <NavDropdown href="/destinations" title="Destination" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/destinations/barcelona">Barcelona</NavDropdown.Item>
                        <NavDropdown.Item href="link1">Madrid</NavDropdown.Item>
                        <NavDropdown.Item href="link1">Valencia</NavDropdown.Item>
                        <NavDropdown.Item href="link1">Mallorca</NavDropdown.Item>
                        <NavDropdown.Item href="link1">seville</NavDropdown.Item>
                        <NavDropdown.Item href="link1">Bilbao</NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/upload">Upload Photo</Nav.Link>
                    <div className='m-2' style={{float:'right'}}>
                    
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}