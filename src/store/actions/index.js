import { COMPONENT_LOAD_START, API_CALL } from './types';

export function loadDataForComponents(payload) {
  return {
    type: COMPONENT_LOAD_START,
    payload
  };
}

export function carregarUser(payload) {
  return {
    type: API_CALL,
    payload: {
      name: payload.name || 'entity',
      endpoint: payload.uri,
      baseUri: payload.baseUri,
      method: payload.method || 'GET'
    }
  };
}
