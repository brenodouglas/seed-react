import { createStore, applyMiddleware } from 'redux';
import redurces from './redurces';
import apiMiddleware from './middlewares/api';

export default createStore(
    redurces,
    applyMiddleware(apiMiddleware)
);
