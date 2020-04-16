import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";
import { selectDropdownHidden } from "../../redux/cart/cart.selectors";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import { auth } from "../../firebase/firebase.utils";

import "./header.scss";

function Header({ currentUser, hidden }) {
  return (
    <div className="header">
      <Link to="/" className="header__logo-container">
        <Logo className="header__logo-image" />
      </Link>
      <div className="header__options">
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        {currentUser ? (
          <>
            <div>{currentUser.email}</div>
            <div
              onClick={() => {
                auth.signOut();
              }}
            >
              Sign out
            </div>
          </>
        ) : (
          <Link to="/signin">Sign in</Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectDropdownHidden,
});

export default connect(mapStateToProps)(Header);
