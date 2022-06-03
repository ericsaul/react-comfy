import { useContext, useReducer, createContext } from "react";
import reducer from "../reducers/cart_reducer";

const initialState = {};

const CartContext = createContext();

import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

export const CartProvider = ({ children }) => {
  return <CartContext.Provider value="hello">{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);

export default CartContext;
