import React from "react";
import { connect } from "react-redux";

import {
  clearItem,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions.js";

import "./checkout-item.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span onClick={() => removeItem(cartItem)} className="arrow">
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span onClick={() => addItem(cartItem)} className="arrow">
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <div
        onClick={() => {
          clearItem(cartItem);
        }}
        className="remove-button"
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
