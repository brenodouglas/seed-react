import { createStore, applyMiddleware } from 'redux';
import redurces from './redurces';
import apiMiddleware from './middlewares/api';
import fetchMiddleware from './middlewares/fetch';

export default createStore(
    redurces,
    applyMiddleware(apiMiddleware),
    applyMiddleware(fetchMiddleware)
);
