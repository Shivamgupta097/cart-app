import { createContext, useReducer } from "react";
import { SHOP_DATA } from "../shop_data";
import { cartReducer } from "./Reducers";

export const CartContext=createContext();

const CartProvider = ({children}) =>{
    const [cart, dispatch] = useReducer(cartReducer , []);
    console.log(cart);
    return <CartContext.Provider value={{cart ,dispatch}}>{children}</CartContext.Provider>
};

export default CartProvider;