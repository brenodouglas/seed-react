import { COMPONENT_LOAD_START } from './types';

export function loadDataForComponents(payload) {
  return {
    type: COMPONENT_LOAD_START,
    payload
  };
}
