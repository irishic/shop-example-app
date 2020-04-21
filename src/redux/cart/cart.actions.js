import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  };
};

export const addItem = (payload) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload,
  };
};

export const removeItem = (payload) => {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload,
  };
};

export const clearItem = (payload) => {
  return {
    type: CartActionTypes.CLEAR_ITEM,
    payload,
  };
};
