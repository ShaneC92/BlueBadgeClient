import React from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, Button} from 'reactstrap';
import './Navbar.css';
import {useHistory} from 'react-router-dom';


const Sitebar = (props) => {

    // const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();
    // const toggle = () => {
    //     let newIsOpen = !isOpen;
    //     setIsOpen(newIsOpen);
    // }

    const logOut = () => {
        history.push('/');
        props.clickLogout();
    }

    function logoutBtn() {
        return localStorage.getItem("token") === null ? (
          ""
        ) : (
          <Button onClick={logOut}>
            Logout
          </Button>
        );
      }

    return(
        <Navbar className='NavStyle'>
            <NavbarBrand style={{color: 'white', textDecoration: 'underline', fontFamily: 'cursive', fontSize: '25px'}} href='/'>Hair Salon</NavbarBrand>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        {logoutBtn()}
                        {/* <Button onClick={props.clickLogout}>Logout</Button> */}
                    </NavItem>
                </Nav>
        </Navbar>
    )
}


export default Sitebar;