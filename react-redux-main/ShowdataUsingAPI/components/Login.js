import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { addUserAsync, loggedIn } from '../actions';
import {UserDetails} from './Profile'


export const Login = () => {
    const signIn = useSelector(state => state.Logged)
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
        { !signIn ?
        <center>
            <div>
                <h2>Login</h2>
                <input required id="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/><br/>
                <input type="password" required id="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/><br/>
                <button variant="contained" color="primary" type="submit" onClick={() => {
                    dispatch(loggedIn())
                    dispatch(addUserAsync({email: email, password: password}))}} >Log In
                </button>    
            </div> </center> 
            :
            <UserDetails />
        }
        </div>
    )
}
