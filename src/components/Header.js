import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Search, ShoppingBasket } from "@material-ui/icons";

function Header() {
  return (
    <nav className="header">
      {/* Logo ->left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="header__search">
        {/* Search box */}
        <input type="text" className="header__searchInput" />
        <Search className="header__SearchIcon" />
      </div>
      <div className="header__nav">
        {/* Link 1 */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineone">Hello Sandeep</span>
            <span className="header__optionLinetwo">Sign In</span>
          </div>
        </Link>
        {/* Link 2 */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineone">Returns</span>
            <span className="header__optionLinetwo">& Orders</span>
          </div>
        </Link>
        {/* Link 3 */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineone">Your</span>
            <span className="header__optionLinetwo">Prime</span>
          </div>
        </Link>
        {/* Link 4 */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Shooping basket */}
            <ShoppingBasket />
            {/* Number of items */}
            <span className="header__optionLinetwo header__basketCount">0</span>
          </div>
        </Link>
      </div>
      {/* 3Links */}
      {/* Link with Basket icon with Number */}
    </nav>
  );
}

export default Header;
