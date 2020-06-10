import React, {useState} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import './Auth.css';
import Signup from '../Signup';
import Login from '../Login';


const Auth = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('true');

    const loginForm = () => {
        return login ? (
            <Login updateToken={props.updateToken} />
            ) : (
            <Signup updateToken={props.updateToken} />
        );
    };

    const loginToggle = (event) => {
        event.preventDefault();

        setLogin(!login);

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');

    }

    return(
        <Container className='auth-container'>
            <Row className='lgnRow'>
                <h3>{loginForm()}</h3>
            </Row>
            <Row classname='lgnRow2'>
                <Button className='lgnToggle' onClick={loginToggle}>Login/SignUp</Button>
            </Row>
        </Container>
    )
};

export default Auth;