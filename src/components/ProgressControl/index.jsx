import './ProgressControl.scss'
import { ReactComponent as LeftArrow } from '../../assets/icons/left-arrow.svg';
import { ReactComponent as ReftArrow } from '../../assets/icons/right-arrow.svg';

const ProgressControl = () => {
  return (
    <section className="progress-control col col-12 ">
      <div className="d-flex justify-content-between">
        <button className="btn px-5 py-2" type="button">
          <LeftArrow className="left-arrow" alt="" />
          上一步
        </button>
        <button className="btn btn-primary px-5 py-2" type="button">
          下一步
          <ReftArrow className="right-arrow" alt="" />
        </button>
      </div>
    </section>
  );
};

export default ProgressControl;
