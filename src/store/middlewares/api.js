import 'isomorphic-fetch';


export default (store) => {
  const { dispatch } = store;

  return next => action => {
    const {
      types,
      uri,
      baseUri,
      payload = {}
    } = action;

    if (! types) {
      return next(action);
    }

    const [requestType, successType, failureType] = types;

    dispatch({ ...payload, type: requestType });

    return fetch(`${baseUri}/${uri}`, payload).then(response => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }

      return response.json();
    })
    .then(result => {
      dispatch({
        ...payload,
        type: successType,
        body: result,
        result,
        lastFetched: Date.now()
      });
    })
    .catch(err => {
      dispatch({
        ...payload,
        type: failureType,
        body: err
      });
    });
  };
};
