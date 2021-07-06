// import counterReducer from './counter';
// import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

import { sessionReducer } from 'redux-react-session';

const rootReducers = combineReducers({
    // counter: counterReducer,
    // isLogged : loggedReducer
    session: sessionReducer
})

export default rootReducers;