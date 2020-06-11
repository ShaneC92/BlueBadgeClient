import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../helpers/environment';


const ReserveEdit = (props) => {
    const [editArrival, setEditArrival] = useState(props.reservationToUpdate.arrivalTime);
    const [editDesc, setEditDesc] = useState(props.reservationToUpdate.description);
    const [editShampoo, setEditShampoo] = useState(props.reservationToUpdate.shampoo);
    const [editShave, setEditeShave] = useState(props.reservationToUpdate.shave);

    const reserveUpdate = (event, reserve) => {
        event.preventDefault();
        fetch(`${APIURL}/reserve/${props.reservationToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({reserve: {arrivalTime: editArrival, description: editDesc, shampoo: editShampoo, shave: editShave}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => {
            props.fetchReservations();
            props.updateOff();
        })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Make a Reservation</ModalHeader>
            <ModalBody>
                <Form onSubmit={reserveUpdate}>
                    <FormGroup>
                        <Label htmlFor='arrivalTime'>Schedule Time:</Label>
                        <Input name='arrivalTime' value={editArrival} onChange={(e) => setEditArrival(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='description'>What needs done?(i.e. Haircut, Trim)</Label>
                        <Input name='description' value={editDesc} onChange={(e) => setEditDesc(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='shampoo'>Shampoo</Label>
                        <Input type='select' name='shampoo' value={editShampoo} onChange={(e) => setEditShampoo(e.target.value)}>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='shave'>Shave</Label>
                        <Input type='select' name='shave' value={editShave} onChange={(e) => setEditeShave(e.target.value)}>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                        </Input>
                    </FormGroup>
                    <Button type='submit'>Confirm Reservation!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
};


export default ReserveEdit;