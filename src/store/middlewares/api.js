import 'isomorphic-fetch';
import { CALL_API_REQUEST, CALL_API_SUCCESS, CALL_API_FAILURE, API_CALL } from './../actions/types';

export default (store) => {
  const { dispatch } = store;

  return next => action => {
    const {
      type,
      payload = {}
    } = action;

    if (type !== API_CALL) {
      return next(action);
    }

    dispatch({ ...payload, type: CALL_API_REQUEST });

    return fetch(`${payload.baseUri}/${payload.endpoint}`, payload).then(response => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }

      return response.json();
    })
    .then(result => {
      dispatch({
        ...payload,
        type: CALL_API_SUCCESS,
        entity: result,
        lastFetched: Date.now()
      });
    })
    .catch(err => {
      dispatch({
        ...payload,
        type: CALL_API_FAILURE,
        err
      });
    });
  };
};
