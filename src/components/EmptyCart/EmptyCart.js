import React from 'react';
import "./EmptyCart.css";
import { BsCartX } from "react-icons/bs";

const EmptyCart = () => {
  return (
    <div className='empty'>
        <BsCartX className="icon"/>

        <h6>Cart is empty</h6>

    </div>
  )
}

export default EmptyCart