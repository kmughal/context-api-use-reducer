export const counterReducer = (state, action) => {
    switch (action) {
        case 'increment': return { counter: state.counter + 1 };
        case 'decrement': return { counter: state.counter - 1 };
        default:
            return state;
    }
}
