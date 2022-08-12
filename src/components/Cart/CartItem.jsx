import React, { memo } from 'react'
import style from './Cart.module.scss';
import { CartItemType } from '../type'
import { ReactComponent as Minus } from '../../assets/icons/minus.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { useCartContext } from './CartContext';



const CartItem: CartItemType = (props) => {
  const { atRemoveItem, atUpdateQuantity } = useCartContext()
  const { id, img, name, price, quantity } = props;

  return (
    <div className={style.productContainer} >
      <div className="row my-3">
        <div className="col col-4">
          <img className={style.img} src={img} alt="" />
        </div>
        <div className="col col-8">
          <div className={style.info}>
            <div className={style.name}>{name}</div>
            <div className={style.price}>${price * quantity}</div>
          </div>
          <div className={style.controlContainer}>
            <div className={style.control}>
              <button
                className={style.btnMinus}
                disabled={(quantity <= 1)}
                onClick={() => atUpdateQuantity(id, quantity - 1)} >
                <Minus />
              </button>

              <span className={style.quantity}>{quantity}</span>

              <button
                className={style.btnPlus}
                // disabled={inventory - quantity < 1}
                onClick={() => atUpdateQuantity(id, quantity + 1)} >
                <Plus />
              </button>

              <button className="btn btn-outline-danger" onClick={() => atRemoveItem(id)}>remove</button>
            </div>
          </div>
        </div>
      </div >
    </div >
  );

}
export default React.memo(CartItem);