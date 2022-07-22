import './ProgressControl.scss'
import { ReactComponent as LeftArrow } from '../../assets/icons/left-arrow.svg';
import { ReactComponent as ReftArrow } from '../../assets/icons/right-arrow.svg';

const ProgressControl = (props) => {
  const { step, setStep } = props
  return (
    <section className="progress-control col col-12 ">
      <div className="d-flex justify-content-between">
        <button
          className="btn pre-btn px-5 py-2"
          type="button"
          data-active={!(step === 0)}
          disabled=''
          onClick={() => setStep(step - 1)} >
          <LeftArrow className="left-arrow" alt="" />
          上一步
        </button>
        <button
          className="btn next-btn btn-primary px-5 py-2"
          type="button"
          data-active=""
          disabled={!(step < 2)}
          onClick={() => setStep(step + 1)} >
          {step < 2 ? '下一步' : '確認下單'}
          <ReftArrow className="right-arrow" alt="" />
        </button>
      </div>
    </section>
  );
};

export default ProgressControl;
