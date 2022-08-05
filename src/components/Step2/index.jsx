import React, { memo } from 'react';
// phase = "shipping"

import style from './Step2.module.scss';

const radioData = [
  {
    id: 'shipping-standard',
    name: '標準運送',
    period: '約 3~7 個工作天',
    price: 0,
  },
  {
    id: 'shipping-dhl',
    name: 'DHL 貨運',
    period: '48 小時內送達',
    price: 500,
  },
];

const Step2 = () => {
  const radioDataMap =
    radioData.map((x) => {
      return (
        <div className={`${style.group} col col-12 mb-3`} key={x.id}>
          <div className={style.groupRight}>
            <input id={x.id} type="radio" name="shipping" />
            <label />
            <div className={style.info}>
              <div className={style.text}>{x.name}</div>
              <div className={`${style.period} col col-12`}>{x.period}</div>
            </div>
          </div>
          <div className={style.price}>
            {x.price === 0 ? '免費' : `$${x.price}`}
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
