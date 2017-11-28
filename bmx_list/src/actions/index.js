export const selectTrick = (trickId) => {
    return {
        type: 'select_trick',
        payload: trickId
    };
};
