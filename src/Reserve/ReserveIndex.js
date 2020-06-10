import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import ReserveCreate from './ReserveCreate';
import ReserveEdit from './ReserveEdit';
import ReserveTable from './ReserveTable';

const ReserveIndex = (props) => {
    const [reservations, setReservations] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [reservationToUpdate, setReservationToUpdate] = useState({});

    const fetchReservations = () => {
        fetch('http://localhost:3000/reserve', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then((res) => res.json())
        .then((reservationData) => {
            setReservations(reservationData.reserve)
        })
    }

    const editUpdateReservation = (reserves) => {
        setReservationToUpdate(reserves);
        console.log(reserves);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    useEffect(() => {
        fetchReservations();
    })

    return(
        <Container>
            <Row>
                <Col md='3'>
                    <ReserveCreate fetchReservations={fetchReservations} token={props.token} />
                </Col>
                <Col md='9'>
                    <ReserveTable reservations={reservations} editUpdateReservation={editUpdateReservation} updateOn={updateOn} fetchReservations={fetchReservations} token={props.token} />
                </Col>
                {updateActive ? <ReserveEdit reservationToUpdate={reservationToUpdate} updateOff={updateOff} token={props.token} fetchReservations={fetchReservations} /> : <></>}
            </Row>
        </Container>
    )
}


export default ReserveIndex;