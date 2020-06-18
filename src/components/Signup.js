import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../helpers/environment';


const Signup = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/signup`, {
            method: 'POST',
            body: JSON.stringify({firstName: firstName, lastName: lastName, email: email, password: password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='firstName'>First Name:</Label>
                    <Input 
                        onChange={(e) => setFirstName(e.target.value)} name='firstName' 
                        value={firstName}
                        required 
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='lastName'>Last Name:</Label>
                    <Input 
                        onChange={(e) => setLastName(e.target.value)} name='lastName' 
                        value={lastName} 
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='email'>Email:</Label>
                    <Input 
                        onChange={(e) => setEmail(e.target.value)} name='email' 
                        value={email}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='password'>Password:</Label>
                    <Input 
                        onChange={(e) => setPassword(e.target.value)} name='password' 
                        required
                        value={password}
                        minLength='5' 
                        maxLength='15' 
                        type='password'
                    />
                </FormGroup>
                <Button style={{color: 'black'}} type='submit'>Signup</Button>
            </Form>
        </div>
    )
}

export default Signup;