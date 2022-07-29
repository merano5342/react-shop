import React, { memo, useCallback } from 'react'
import style from './Cart.module.scss';
import cx from 'classnames'
import { ReactComponent as Minus } from '../../assets/icons/minus.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';

// const productItem = [
//   {
//     name: '破壞補丁修身牛仔褲',
//     count: 0,
//     price: 3999,
//     img: require('../../assets/images/product-1.jpg'),
//   },
//   {
//     name: '刷色直筒牛仔褲',
//     count: 0,
//     price: 1299,
//     img: require('../../assets/images/product-2.jpg'),
//   },
// ];

const Cart = React.memo((props) => {
  const { productList, onSetProductList } = props;
  const productCards = React.useCallback(productList.map((item) => {
    return (
      <div className={style.productContainer} key={productList.indexOf(item)}>
        <div className="row my-3">
          <div className="col col-4">
            <img className={style.img} src={item.img} alt="" />
          </div>
          <div className="col col-8">
            <div className={style.info}>
              <div className={style.name}>{item.name}</div>
              <div className={style.price}>${item.price}</div>
            </div>
            <div className={style.controlContainer}>
              <div className={style.control}>
                <Minus className="minus" alt="" />
                <span className={style.quantity}>{item.quantity}</span>
                <Plus className="plus" alt="" />
                <button className="btn btn-outline-danger">remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }), [productList])
  return (
    <div className={`${style.cart}  ml-3`}>
      <h4 className="cart-title mb-3"> 購物籃</h4>
      {productCards}
      <div className={style.cartInfo}>
        <div className={style.text}>運費</div>
        <div className={style.price}>免費</div>
      </div>
      <div className={style.cartInfo}>
        <div className={style.text}>小計</div>
        <div className={style.price}>$0</div>
      </div>
    </div>
  );
});

export default Cart;
