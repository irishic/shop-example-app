import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors.js";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.scss";

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemsCount || 0}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => {
    dispatch(toggleCartHidden());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
