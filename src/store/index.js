import { createStore, applyMiddleware } from 'redux';
import redurces from './redurces';
import apiMiddleware from './middlewares/api';
import fetchMiddleware from './middlewares/fetch';
import thunk from 'redux-thunk';

export default createStore(
    redurces,
    applyMiddleware(thunk),
    applyMiddleware(apiMiddleware),
    applyMiddleware(fetchMiddleware)
);
