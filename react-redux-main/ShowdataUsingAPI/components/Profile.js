import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {loggedIn} from '../actions';


export const UserDetails = () => {

    const dispatch = useDispatch()
    const UserSelector = useSelector(state => state.User)
    return (<>
    <center>
        <div>
            <h2 >{UserSelector.name} Details</h2><br/>
            <h2>User Id: {UserSelector.id}</h2><br/>
            <h2>Name: {UserSelector.fullname}</h2><br/>
            <h2>Email: {UserSelector.email}</h2><br/>
            
            <button onClick={()=>{dispatch(loggedIn())}} >Go Back</button>
        </div>
        </center>
        </>
    )
}
