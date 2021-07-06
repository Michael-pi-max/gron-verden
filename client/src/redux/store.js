import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import { sessionService } from 'redux-react-session';

const initialState = {};
const middleware = [thunk];

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));

export default store;