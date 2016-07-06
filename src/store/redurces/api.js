import { CALL_API_SUCCESS } from './../actions/types';

export default function (state = { entities: {} }, action) {
  switch (action.type) {
  case CALL_API_SUCCESS: {
    const objeto = {};
    objeto[action.name] = action.entity;
    return {
      entities: {
        ...state.entities,
        ...objeto
      }
    };
  }
  default:
    return state;
  }
}
