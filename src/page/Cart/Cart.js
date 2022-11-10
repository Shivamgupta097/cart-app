import React, { useContext } from 'react';
import "./Cart.css";
import { CartContext } from '../../context/Context'
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import CartItem from '../../components/CartItem/CartItem';

const Cart = () => {
    const {cart ,dispatch} = useContext(CartContext);
  

  const totalPrice = cart.reduce((acc, cur) => acc + (cur.qty + cur.price), 0);
  return (
    <>
    <div className='cart'>
      {cart.length > 0 ? <CartItem/> :<EmptyCart/>}
      {cart.length > 0 && (
        <div className="total mt-4">
          <h6>Total Price :<span className="text-primary mx-2">{totalPrice}$</span></h6>
        </div>
      )}

    </div>

    
    </>
  )
}

export default Cart