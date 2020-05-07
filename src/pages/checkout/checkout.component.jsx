import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.scss';

const CheckoutPage = ({ totalPrice, cartItems }) => {
  const productColumns = [
    'Product',
    'Description',
    'Quantity',
    'Price',
    'Remove',
  ];
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        {productColumns.map((col) => (
          <div className="header-block">
            <span>{col}</span>
          </div>
        ))}
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}

      <div className="total">
        <span>Total: ${totalPrice}</span>
      </div>

      <div className="test-warning">
        *Please use the following test creadit card for payments*
        <br />
        4242 4242 4242 4242 - exp: 01/24 - CVV: 123
      </div>
      <StripeButton price={totalPrice} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
