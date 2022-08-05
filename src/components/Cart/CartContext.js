import React, { useContext } from 'react';


export const CartContext = React.createContext(null);


export function useCartContext() {
  const ctx = useContext(CartContext);

  // 防呆機制
  if (ctx == null) {
    throw new Error('useCartContext must be used inside a ContextProvider.');
  }
  return ctx;
}