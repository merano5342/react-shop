import { useCartContext } from 'components/Cart/CartContext';
import React, { memo } from 'react';
// phase = "shipping"
import { shippingRadioData } from '../config'
import style from './Step2.module.scss';



const Step2 = () => {
  const { atApplyShipping } = useCartContext()
  const radioDataMap =
    shippingRadioData.map((shipping) => {

      return (
        <div className={`${style.group} col col-12 mb-3`} key={shipping.id}>
          <div className={style.groupRight}>
            <input id={shipping.id} type="radio" name="shipping"
              onClick={() => {
                console.log(shipping.price)
                atApplyShipping(shipping);
              }}
            />
            <label />
            <div className={style.info}>
              <div className={style.text}>{shipping.name}</div>
              <div className={`${style.period} col col-12`}>{shipping.period}</div>
            </div>
          </div>
          <div className={style.price}>
            {shipping.price === 0 ? '免費' : `$${shipping.price}`}
          </div>
        </div>
      );
    });

  return (
    <section className={`${style.form} col col-12`} data-phase="shipping">
      <h3 className="form-title mb-3">運送方式</h3>
      {radioDataMap}
    </section>
  );
};

export default React.memo(Step2);
