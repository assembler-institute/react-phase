import { useReducer } from 'react';
import { CounterContext } from './CounterContext';
import { countReducer } from '../../reducers/countReducer';

const initialState = { count: 9, inputText: '' };

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;
