import React from 'react';
import {Table, Button} from 'reactstrap';
import APIURL from '../helpers/environment';


const ReserveTable = (props) => {
    const deleteReservation = (reservation) => {
        fetch(`${APIURL}/reserve/${reservation.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchReservations())
    }

    const reservationMapper = () => {
        return props.reservations.map((reservation, index) => {
            return(
                <tr key={index}>
                    <th scope='row'>{reservation.arrivalTime}</th>
                    <td>{reservation.description}</td>
                    <td>{reservation.shampoo}</td>
                    <td>{reservation.shave}</td>
                    <td>
                        <Button color='warning' onClick={() => {props.editUpdateReservation(reservation); props.updateOn()}}>Update</Button>
                        <Button color='danger' onClick={() => {deleteReservation(reservation)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
            <h3>Reservations</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>Arrival Time</th>
                        <th>Description</th>
                        <th>Shampoo</th>
                        <th>Shave</th>
                    </tr>
                </thead>
                <tbody>
                    {reservationMapper()}
                </tbody>
            </Table>
        </>
    )

}


export default ReserveTable;