import React from 'react';
import PropTypes from 'prop-types';

function CartItem({ item, deleteFromCart }) {
  function filledTrashIcon(event) {
    event.target.className = 'ri-delete-bin-fill';
  }
  function emptyTrashIcon(event) {
    event.target.className = 'ri-delete-bin-line';
  }

  return (
    <div className="cart-item">
      <i
        className="ri-delete-bin-line"
        onMouseOver={filledTrashIcon}
        onMouseOut={emptyTrashIcon}
        onClick={() => deleteFromCart(item)}
      ></i>
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;
