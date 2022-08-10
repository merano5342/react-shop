import React, { memo } from 'react';
import style from './ProgressControl.module.scss'
import { ReactComponent as LeftArrow } from '../../assets/icons/left-arrow.svg';
import { ReactComponent as ReftArrow } from '../../assets/icons/right-arrow.svg';
import { useCartContext } from '../Cart/CartContext';

const ProgressControl = () => {
  // const { setStep, step } = props;
  const { setStep, step } = useCartContext()
  return (
    <section className={`${style.control} col col-12`}>
      <div className="d-flex justify-content-between">
        <button
          className={`${style.preBtn} btn px-5 py-2`}
          type="button"
          data-active={!(step === 1)}
          disabled=""
          onClick={() => setStep(step - 1)} >
          <LeftArrow className={style.leftArrow} alt="" />
          上一步
        </button>
        <button
          className={`${style.nextBtn} btn btn-primary px-5 py-2`}
          type="button"
          data-active=""
          disabled={!(step < 3)}
          onClick={() => setStep(step + 1)} >
          {step < 3 ? '下一步' : '確認下單'}
          <ReftArrow className={style.rightArrow} alt="" />
        </button>
      </div>
    </section>
  );
};

export default React.memo(ProgressControl);
