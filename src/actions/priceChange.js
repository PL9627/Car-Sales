export const addPrice = (item) => {
    return {
        type: "ADD_PRICE",
        payload: item
    };
};

export const removePrice = (item) => {
    return {
        type: "REMOVE_PRICE",
        payload: item
    }
}