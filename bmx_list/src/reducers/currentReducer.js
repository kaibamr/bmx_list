export default (state = null, action) => {
    switch (action.type) {
        case 'select_trick':
            if (state === action.payload) return null;
            return action.payload;
        default:
            return state;
    }
};
