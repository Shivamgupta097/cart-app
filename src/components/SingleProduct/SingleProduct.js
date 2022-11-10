import React, { useContext } from "react";
import {CartContext} from "../../context/Context";

const SingleProduct = ({ product }) => {
  const {cart ,dispatch} = useContext(CartContext);
  return (
    // <div className="single_product"><img src={product.imageUrl} width="100%"/><h2>{product.name}</h2></div>
    <div className="card shadow">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="card-img-top img-fluid"
      />
      <div className="card-body">
        <div className="row mt-2">
          <h5 className="card-title text-center">{product.name}</h5>
        </div>
        <div className="row mt-2">
          <p className="card-text">{product.price}$</p>
        </div>

        <div className="row mt-2">
          {cart.some((c) => c.id == product.id) ? <button className="btn btn-danger m-auto" onClick={() => dispatch({type:"REMOVE_FROM_CART", payload:product})}>Remove from cart</button>: <button className="btn btn-success m-auto" onClick={() => dispatch({type:"ADD_TO_CART", payload:product})}>Add to cart</button>}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
