import React, { useContext, memo } from 'react';
import { CounterContext } from '../context/Counter/CounterContext';
import { ACTIONS } from '../reducers/countReducer';

// const ACTIONS = {
//   INCREMENT: 'increment_counter',
//   DECREMENT: 'decrement_counter',
//   UPDATE_TEXT: 'update_text',
// };

// const initialState = { count: 9, inputText: '' };

// const countReducer = (state, action) => {
//   switch (action.type) {
//     case ACTIONS.INCREMENT:
//       return { ...state, count: state.count + 1 };
//     case ACTIONS.DECREMENT:
//       return { ...state, count: state.count - 1 };
//     case ACTIONS.UPDATE_TEXT:
//       return { ...state, inputText: action.payload };
//     default:
//       throw new Error('Invalid Action');
//   }
// };

function CounterPage() {
  // const [state, dispatch] = useReducer(countReducer, initialState);
  const { state, dispatch } = useContext(CounterContext);
  // console.log({ state });
  return (
    <div>
      <h1>The value of count is: {state.count}</h1>
      <h1>The value of inputText is: {state.inputText}</h1>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
        INCREMENT
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
        DECREMENT
      </button>
      <input
        type="text"
        value={state.inputText}
        onChange={(e) =>
          dispatch({ type: ACTIONS.UPDATE_TEXT, payload: e.target.value })
        }
      />
    </div>
  );
}

export default memo(CounterPage);
