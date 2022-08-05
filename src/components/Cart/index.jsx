import React, { memo } from 'react'
import style from './Cart.module.scss';
import cx from 'classnames'

import { useCartContext } from './CartContext';
import LineItem from './LineItem';


const Cart = () => {
  const { products, setProducts, step, setStep, StepControl, totalAmount, setTotalAmount, productData } = useCartContext()

  console.log(StepControl)



  return (
    <div className={`${style.cart}  ml-3`}>
      <h4 className="cart-title mb-3"> 購物籃</h4>
      {products.map((item) => {
        return (<LineItem
          key={item.id}
          id={item.id}
          img={item.img}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          inventory={productData.find((data) => data.id === item.id).inventory}
        />)
      })}
      <div className={style.cartInfo}>
        <div className={style.text}>運費</div>
        <div className={style.price}>免費</div>
      </div>
      <div className={style.cartInfo}>
        <div className={style.text}>小計</div>
        <div className={style.price}>${totalAmount}</div>
      </div>
    </div>
  );
};

export default React.memo(Cart);
