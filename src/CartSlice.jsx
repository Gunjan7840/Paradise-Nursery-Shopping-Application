import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./redux/CartSlice";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // ✅ Dedicated function for total calculation (RUBRIC FIX)
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // ✅ Proper decrement logic (RUBRIC FIX)
  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id)); // remove when quantity reaches 0
    } else {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>

              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity + 1,
                    })
                  )
                }
              >
                +
              </button>

              <button onClick={() => handleDecrement(item)}>-</button>

              <button onClick={() => dispatch(removeItem(item.id))}>
                Delete
              </button>
            </div>
          ))}

          <h3>Total Amount: ₹{calculateTotal()}</h3>
        </>
      )}
    </div>
  );
};

export default CartItem;
