import React, { useState, useContext } from 'react';
import { UserContext } from '../context';
import CartItem from '../Components/CartItem.jsx';

function Cart() {
  const { cartPhotos, deleteFromCart, emptyCart } = useContext(UserContext);
  const [buttonText, setButtonText] = useState('Place Order');

  const cartItemElements = cartPhotos.map((item) => (
    <CartItem key={item.id} item={item} deleteFromCart={deleteFromCart} />
  ));

  // display cost
  let placeholderCost = 5.99;
  let total = cartItemElements.length * placeholderCost;
  total = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  // Simulating placing an order;
  function simulateOrder() {
    setButtonText('Ordering...');
    setTimeout(() => {
      console.log('Order placed');
      setButtonText('Place Order');
      debugger;
      emptyCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {total}</p>
      {cartPhotos.length > 0 ? (
        <div className="order-button">
          <button onClick={simulateOrder}>{buttonText}</button>
        </div>
      ) : (
        <p>You have no items in your cart.</p>
      )}
    </main>
  );
}

export default Cart;
