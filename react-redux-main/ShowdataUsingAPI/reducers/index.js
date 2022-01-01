import LoggedReducer from './Islogged';
import userReducer from './User'

import {combineReducers } from 'redux'

const Reducer = combineReducers({
    Logged: LoggedReducer,
    User: userReducer
});

export default Reducer