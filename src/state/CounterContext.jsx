import React, { useReducer } from 'react';
import { counterReducer } from './reducer';

const initialState = { counter: 1 }

const context = React.createContext(initialState);
export const useCounter = () => {
    if (!context) throw new Error('context is not init properly')
    return React.useContext(context);
}

export const CounterProvider = (props) => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const value = { state, dispatch };
    return <context.Provider value={value}>
        {props.children}
    </context.Provider>
}
