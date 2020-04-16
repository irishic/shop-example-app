import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.scss";

const CollectionItem = ({ item, addItem }) => {
  const { price, name, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="collection-item__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-item__footer">
        <div className="collection-item__name">{name}</div>
        <div className="collection-item__price">{price}</div>
      </div>
      <CustomButton
        onClick={() => {
          addItem(item);
        }}
        inverted
      >
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => {
    dispatch(addItem(item));
  },
});

export default connect(null, mapDispatchToProps)(CollectionItem);
