import './StepProgress.scss';
import { ReactComponent as Complete } from '../../assets/icons/pg-complete.svg';



const StepProgress = (props) => {

  const { step } = props;

  const steps = [
    { idx: 0, stepName: '寄送地址' },
    { idx: 1, stepName: '運送方式' },
    { idx: 2, stepName: '付款資訊' }];

  const [Step1, Step2, Step3] = [steps[0], steps[1], steps[2]]

  const statusControl = (theIdx) => {
    let statusControl = ''
    if (step === theIdx) {
      statusControl = 'on-step'
    } else if (step > theIdx) {
      statusControl = 'done'
    } else if (step < theIdx) {
      statusControl = 'disable'
    }
    return statusControl
  }

  return (
    <>
      <h2 className="register-title col col-12">結帳</h2>
      <section className="progress-container col col-12">

        <span className="progress-group" data-status={statusControl(Step1.idx)}>
          <Complete className="complete" alt="" data-status={statusControl(Step1.idx) === 'done'} />
          <span className="progress-icon" data-status={statusControl(Step1.idx)}>
            <span className="text">{Step1.idx + 1}</span>
            <div className="circle" />
          </span>
          <span className="progress-label">{Step1.stepName}</span>
        </span>

        <span className="progress-bar" data-status={statusControl(Step2.idx)} />

        <span className="progress-group" data-status={statusControl(Step2.idx)}>
          <Complete className="complete" alt="" data-status={statusControl(Step2.idx) === 'done'} />
          <span className="progress-icon" data-status={statusControl(Step2.idx)}>
            <span className="text">{Step2.idx + 1}</span>
            <div className="circle" />
          </span>
          <span className="progress-label">{Step2.stepName}</span>
        </span>

        <span className="progress-bar" data-status={statusControl(Step3.idx)} />

        <span className="progress-group" data-status={statusControl(Step3.idx)}>
          <Complete className="complete" alt="" data-status={statusControl(Step3.idx) === 'done'} />
          <span className="progress-icon" data-status={statusControl(Step3.idx)}>
            <span className="text">{Step3.idx + 1}</span>
            <div className="circle" />
          </span>
          <span className="progress-label">{Step3.stepName}</span>
        </span>
      </section>
    </>
  );
};

export default StepProgress;
