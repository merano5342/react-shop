import React, { memo } from 'react'
import style from './Cart.module.scss';
import cx from 'classnames'

import { useCartContext } from './CartContext';
import CartItem from './CartItem';


const Cart = (props) => {
  const { state, cartItems, productData, step, totalAmount, setTotalAmount, atUpdateQuantity } = useCartContext()
  const cart = state
  const shippingOpt = state.shipping


  return (
    <div className={`${style.cart}  ml-3`}>
      <h4 className="cart-title mb-3"> 購物籃</h4>
      <p className="mr-3">{`it's now on step ${step}`}</p>
      {cartItems.map((item) => {
        return (<CartItem
          key={item.id}
          id={item.id}
          img={item.img}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />)
      })}
      <div className={style.cartInfo}>
        <div className={style.text}>運費</div>
        <div className={style.price}>{shippingOpt.price === 0 ? '免費' : `$ ${shippingOpt.price}`}</div>
      </div>
      <div className={style.cartInfo}>
        <div className={style.text}>小計</div>
        <div className={style.price}>${cart.totalAmount}</div>
      </div>
    </div>
  );
};

export default React.memo(Cart);
