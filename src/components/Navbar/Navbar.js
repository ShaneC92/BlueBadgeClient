import React, {useState} from 'react';
import {Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, Button} from 'reactstrap';
import './Navbar.css';


const Sitebar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    return(
        <Navbar className='NavStyle'>
            <NavbarBrand style={{color: 'white', textDecoration: 'underline'}} href='/'>Hair Salon</NavbarBrand>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
        </Navbar>
    )
}


export default Sitebar;