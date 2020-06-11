import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import APIURL from '../helpers/environment';


const ReserveCreate = (props) => {
    const [arrivalTime, setArrivalTime] = useState('');
    const [description, setDescription] = useState('');
    const [shampoo, setShampoo] = useState('');
    const [shave, setShave] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/reserve`, {
            method: 'POST',
            body: JSON.stringify({arrivalTime: arrivalTime, description: description, shampoo: shampoo, shave: shave}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => res.json())
        .then((reserveData) => {
            console.log(reserveData);
            setArrivalTime('');
            setDescription('');
            setShampoo('');
            setShave('');
            props.fetchReservations();
        })
    }

    return(
        <>
            <h3>Make a Reservation</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='arrivalTime'>Arrival Time</Label>
                    <Input name='arrivalTime' value={arrivalTime} onChange={(e) => setArrivalTime(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='description'>What are we doing on this visit<br />(i.e. Haircut, Trim)</Label>
                    <Input htmlFor='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='shampoo'>Shampoo</Label>
                    <Input type='select' name='shampoo' value={shampoo} onChange={(e) => setShampoo(e.target.value)}>
                    <option></option>
                    <option value='Yes'>Yes</option>
                    <option value='No'>No</option>
                </Input>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='shave'>Shave</Label>
                    <Input type='select' name='shave' value={shave} onChange={(e) => setShave(e.target.value)}>
                        <option></option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                    </Input>
                </FormGroup>
                <Button type='submit'>Make a Reservation!</Button>
            </Form>
        </>
    )
};


export default ReserveCreate;