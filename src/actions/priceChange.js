export const ADD_PRICE = "ADD_PRICE";
export const addPrice = (item) => {
  return {
    type: ADD_PRICE,
    payload: item,
  };
};

export const REMOVE_PRICE = "REMOVE_PRICE";
export const removePrice = (item) => {
  return {
    type: REMOVE_PRICE,
    payload: item,
  };
};
