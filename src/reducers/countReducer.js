export const ACTIONS = {
  INCREMENT: 'increment_counter',
  DECREMENT: 'decrement_counter',
  UPDATE_TEXT: 'update_text',
  RESET_ALL: 'reset_all',
};

export const countReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTIONS.UPDATE_TEXT:
      return { ...state, inputText: action.payload };
    case ACTIONS.RESET_ALL:
      return { count: 0, inputText: '' };
    default:
      throw new Error('Invalid Action');
  }
};
