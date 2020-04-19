import { createSelector } from "reselect";

const selectCart = (state) => state.cart; //input selector

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems || []
); //output selector

export const selectDropdownHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((quantity, currentItem) => {
      quantity = quantity + currentItem.quantity;
      return quantity;
    }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, currentItem) => {
    const { price, quantity } = currentItem;
    total = total + price * quantity;
    return total;
  }, 0)
);
