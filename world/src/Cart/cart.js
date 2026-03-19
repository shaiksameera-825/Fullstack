import React, { useState } from "react";
function Cart() {
  const [cartItems] = useState([]); // empty cart

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <p>Total: ₹{total}</p>
      )}
    </div>
  );
}

export default Cart;
