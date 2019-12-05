import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import { auth } from "../../firebase/firebase.utils";

import "./header.scss";

function Header({ currentUser }) {
  return (
    <div className="header">
      <Link to="/" className="header__logo-container">
        <Logo className="header__logo-image" />
      </Link>
      <div className="header__options">
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        {currentUser ? (
          <div
            onClick={() => {
              auth.signOut();
            }}
          >
            Sign out
          </div>
        ) : (
          <Link to="/signin">Sign in</Link>
        )}
      </div>
    </div>
  );
}

export default Header;
