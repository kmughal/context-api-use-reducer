import React, { useReducer } from 'react';
import ReactDom from 'react-dom';
import { CounterProvider, useCounter } from './state/CounterContext';


const CounterApp = () => {
    const { state, dispatch } = useCounter();

    return <div>
        <p>{state.counter}</p>
        <button onClick={() => { dispatch('increment') }}>Count</button>
    </div>
};

const App = () => {
    return <CounterProvider>
        <h1>Hello World from react</h1>
        <CounterApp />
    </CounterProvider>
};

ReactDom.render(<App />, document.getElementById('root'));