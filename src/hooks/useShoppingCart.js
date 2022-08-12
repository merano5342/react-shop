import React from 'react';
// import { ProductType, CartItemType, Shipping, State } from '..components/type'
import { productData, shippingRadioData } from '../components/config';

const initAmount = productData.reduce((total, currentItem) => {
  return total + currentItem.price * currentItem.quantity;
}, 0)


const initialState: State = {
  cartItems: productData,
  totalAmount: initAmount,
  shipping: shippingRadioData[0],
};

const calcTotalAmount = (cartItems, shipping) => {
  const results = cartItems.reduce((total, currentItem) => {
    return total + currentItem.price * currentItem.quantity;
  }, 0)

  if (shipping.price !== 0) {
    console.log(shipping)
    return results + shipping.price

  }

  return results
}

const updateQuantity = (cartItems, id: Number, quantity: Number) => {
  return cartItems.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        quantity: quantity,
      };
    }
    return item;
  });
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_QUANTITY': {
      const id = action.payload;
      const { quantity } = action;
      const cartItems = updateQuantity(state.cartItems, id, quantity);
      return {
        ...state,
        cartItems,
        totalAmount: calcTotalAmount(cartItems, state.shipping),
      };
    }
    case 'REMOVE_ITEM': {
      const id = action.payload;
      const cartItems = state.cartItems.filter((item) => item.id !== id);
      return {
        ...state,
        cartItems,
        totalAmount: calcTotalAmount(cartItems, state.shipping),
      };
    }
    case 'APPLY_SHIPPING': {
      const shipping = action.payload;
      return {
        ...state,
        shipping,
        totalAmount: calcTotalAmount(state.cartItems, shipping),
      };
    }
    default:
      return state;
  }
}

export default function useShoppingCart() {
  return React.useReducer(reducer, initialState);
}