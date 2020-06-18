import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import './Sidebar.css';


const sidebar = (props) => {

    function viewReservations() {
        return localStorage.getItem('token') === null ? (
            ''
        ) : (
            <li>
                <Link style={{color: '#d1d7e0'}} to='/'>Home</Link>
            </li>
        )
    }

    function viewReservations2() {
        return localStorage.getItem('token') === null ? (
            ''
        ) : (
            <li>
                <Link style={{color: '#d1d7e0'}} to='/Reservation'>Reservations</Link>
            </li>
        )
    }

    return (
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list-list-unstyled'>
                    {viewReservations()}
                    {viewReservations2()}
                    {/* <li>
                        <Link style={{color: 'white'}} to='/Home'>Home</Link>
                    </li>
                    <li>
                        <Link style={{color: 'white'}} to='/Reservation'>Reservations</Link>
                    </li> */}
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/'>{props.protectedViews()}</Route>
                    <Route exact path='/Reservation'>{props.protectedViews2()}</Route>
                </Switch>
            </div>
        </div>
    )
}

export default sidebar;