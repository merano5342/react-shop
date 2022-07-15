import './StepProgress.scss';

const StepProgress = () => {
  const steps = ['寄送地址', '運送方式', '付款資訊'];

  return (
    <>
      <h2 className="register-title col col-12">結帳</h2>
      <section className="progress-container col col-12">
        <span className="progress-group">
          <span className="progress-icon">
            <span className="text">1</span>
            <svg className="icon cursor-point">
              <use xlinkHref="#svg-icon-pg-complete" />
            </svg>
          </span>
          <span className="progress-label">{steps[0]}</span>
        </span>
        <span className="progress-bar" data-order="1" />
        <span className="progress-group" data-phase="shipping">
          <span className="progress-icon">
            <span className="text">2</span>
            <svg className="icon cursor-point">
              <use xlinkHref="#svg-icon-pg-complete" />
            </svg>
          </span>
          <span className="progress-label">{steps[1]}</span>
        </span>
        <span className="progress-bar" data-order="2" />
        <span className="progress-group" data-phase="credit-card">
          <span className="progress-icon">
            <span className="text">3</span>
            <svg className="icon cursor-point">
              <use xlinkHref="#svg-icon-pg-complete" />
            </svg>
          </span>
          <span className="progress-label">{steps[2]}</span>
        </span>
      </section>
    </>
  );
};

export default StepProgress;
