import Api from 'fetch-api';

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

    const api = new Api({
      baseURI: baseUri
    });

    const [requestType, successType, failureType] = types;

    dispatch({ ...payload, type: requestType });

    return api.get(uri, (err, res, parsedResponse) => {
      if (err) {
        dispatch({
          ...payload,
          type: failureType,
          body: err
        });
      } else {
        dispatch({
          ...payload,
          type: successType,
          body: parsedResponse,
          res,
          lastFetched: Date.now()
        });
      }
    });
  };
};
