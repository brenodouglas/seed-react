import { COMPONENT_LOAD_START, COMPONENT_LOAD_END } from './../actions/types';

function getDataDependencies(components, store, location, params) {
  return components
  .filter(component => 'fetch' in component) // 1
  .map(component => component.fetch) // 2
  .map(fetchData => {
    try {
      return fetchData(store.dispatch, location, params);
    } catch (e) {
      return Promise.resolve(e);
    }
  })
  .filter(result => (result || {}).then); // 3
}

export default store => next => action => {
  if (action.type !== COMPONENT_LOAD_START) return next(action);

  next(action);

  return new Promise((resolve, reject) => {
    try {
      const { components, location, params } = action.payload;
      Promise.all(getDataDependencies(components, store, location, params))
      .catch(reject)
      .then(resolve, reject);
    } catch (e) { reject(e); }
  })
  .then(() => next({ type: COMPONENT_LOAD_END }));
};
