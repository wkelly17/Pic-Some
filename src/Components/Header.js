import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context.js';

function Header() {
  const { cartPhotos } = useContext(UserContext);

  function cartIcon() {
    if (cartPhotos.length > 0) {
      return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>;
    } else return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>;
  }

  return (
    <header>
      <h2>
        <Link to="/">Pic Some</Link>
      </h2>
      <Link to="/cart">{cartIcon()}</Link>
    </header>
  );
}

export default Header;
