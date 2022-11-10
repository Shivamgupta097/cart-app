import React, { useContext } from "react";
import { CartContext } from "../../context/Context";
import Cart from "../../page/Cart/Cart";
import "./CartItem.css";

const CartItem = () => {
  const { cart, dispatch } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, cur) => acc + (cur.qty + cur.price), 0);
  console.log(cart);

  return (
    <div className="parent-container">
      {cart.map((product) => (
        <div className="card cart-container  p-4" key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <p className="product-name">{product.name}</p>
          <p className="mt-2">{product.qty * product.price}</p>
          <div className="quantity">
            <button
              className="btn btn-outline-success"
              onClick={() =>
                product.qty > 1 &&
                dispatch({ type: "DECREMENT", payload: product })
              }
            >
              -
            </button>
            <p className="mt-2">{product.qty}</p>
            <button
              className="btn btn-outline-success"
              onClick={() => dispatch({ type: "INCREMENT", payload: product })}
            >
              +
            </button>
          </div>
          <h6
            className="btn"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: product })
            }
          >
            X
          </h6>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
