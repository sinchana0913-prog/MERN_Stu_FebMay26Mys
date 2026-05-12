import React, { useState } from "react";

export function Cart() {
  const [quantity, setQuantity] = useState(1);

  // Increment
  const increase = () => {
    setQuantity(quantity + 1);
  };

  // Decrement
  const decrease = () => {
    
      setQuantity(quantity - 1);

  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Add To Cart</h2>

      <button onClick={decrease}>-</button>

      <span style={{ margin: "0 20px", fontSize: "20px" }}>
        {quantity}
      </span>

      <button onClick={increase}>+</button>
    </div>
  );
}
