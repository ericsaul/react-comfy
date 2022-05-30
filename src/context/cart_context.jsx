import { useContext, createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  return <CartContext.Provider value="hello">{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);

export default CartContext;
