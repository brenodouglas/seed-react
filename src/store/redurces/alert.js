export default function reducer(state = { messages: {}, lastId: 0 }, action) {
  switch (action.type) {
  case 'DISPLAY_ALERT': {
    const lastId = state.lastId + 1;
    return {
      lastId,
      messages: {
        ...state.messages,
        [lastId]: action.payload
      }
    };
  }
  case 'REMOVE_ALERT': {
    const {
      [action.payload.id]: removed, // eslint-disable-line no-unused-vars
        ...messages
      } = state.messages;

    return {
      messages,
      lastId: state.lastId
    };
  }
  default:
    return state;

  }
}
