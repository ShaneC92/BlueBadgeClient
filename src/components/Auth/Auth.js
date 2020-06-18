import React, { useState } from 'react';
import { Container, Row, Button } from 'reactstrap';
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

    return (
        <Container className='auth-container'>
            <Row className='lgnRow'>
                <div className='lgnDiv'>
                    <p className='lgnTitle'>{loginForm()}
                    <br />
                    <Button className='lgnToggle' onClick={loginToggle} style={{color: 'black'}}>Login/SignUp</Button>
                    </p>
                </div>
            </Row>
        </Container>
    )
};

export default Auth;