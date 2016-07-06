import { combineReducers } from 'redux';
import alert from './alert';
import api from './api';

export default combineReducers({
  alert,
  api
});
