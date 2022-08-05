import React, { memo } from 'react'
import style from './Cart.module.scss';
import { ReactComponent as Minus } from '../../assets/icons/minus.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { useCartContext } from './CartContext';

type LineItemProps = {
  id: string,
  img: string,
  name: String,
  price: number,
  quantity: number,
};

const LineItem: React.FC<LineItemProps> = (props) => {
  const { atUpdateQuantity, productData, onRemoveItem } = useCartContext()
  const { id, img, name, price, quantity } = props;
  const inventory = productData.find((data) => data.id === id).quantity
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
                disabled={inventory - quantity < 1}
                onClick={() => atUpdateQuantity(id, quantity + 1)} >
                <Plus />
              </button>

              <button className="btn btn-outline-danger" onClick={() => onRemoveItem(id)}>remove</button>
            </div>
          </div>
        </div>
      </div >
    </div >
  );

}
export default React.memo(LineItem);