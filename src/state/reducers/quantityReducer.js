 const reducer = (state = 0, action) => {
    if (action.type === 'addItems') {
        return state + action.payload;
    }
    else if (action.type === 'removeItems') {
        return state <= 0 ? state : state - action.payload;
    }
    else {
        return state;
    }
}

export default reducer;