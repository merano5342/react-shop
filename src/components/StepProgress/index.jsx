import React, { memo } from 'react'
import style from './StepProgress.module.scss';
import { ReactComponent as Complete } from '../../assets/icons/pg-complete.svg';



const StepProgress = React.memo((props) => {

  const { step } = props;

  const steps = [
    { idx: 0, stepName: '寄送地址' },
    { idx: 1, stepName: '運送方式' },
    { idx: 2, stepName: '付款資訊' }];

  const [Step1, Step2, Step3] = [steps[0], steps[1], steps[2]]

  const statusControl = (idx) => {
    let statusControl = ''
    if (step === idx) {
      statusControl = 'on-step'
    } else if (step > idx) {
      statusControl = 'done'
    } else if (step < idx) {
      statusControl = 'disable'
    }
    return statusControl
  }

  return (
    <>
      <h2 className="register-title col col-12">結帳</h2>
      <section className={`${style.container} col col-12`}>

        <span className={style.progressGroup} data-status={statusControl(Step1.completeIcon)}>
          <Complete className={style.completeIcon} alt="" data-status={statusControl(Step1.idx) === 'done'} />
          <span className={style.progressIcon} data-status={statusControl(Step1.idx)}>
            <span className={style.text}>{Step1.idx + 1}</span>
            <div className={style.circle} />
          </span>
          <span className={style.progressLabel}>{Step1.stepName}</span>
        </span>

        <span className={style.progressBar} data-status={statusControl(Step2.idx)} />

        <span className={style.progressGroup} data-status={statusControl(Step2.idx)}>
          <Complete className={style.completeIcon} alt="" data-status={statusControl(Step2.idx) === 'done'} />
          <span className={style.progressIcon} data-status={statusControl(Step2.idx)}>
            <span className={style.text}>{Step2.idx + 1}</span>
            <div className={style.circle} />
          </span>
          <span className={style.progressLabel} >{Step2.stepName}</span>
        </span>

        <span className={style.progressBar} data-status={statusControl(Step3.idx)} />

        <span className={style.progressGroup} data-status={statusControl(Step3.idx)}>
          <Complete className={style.completeIcon} alt="" data-status={statusControl(Step3.idx) === 'done'} />
          <span className={style.progressIcon} data-status={statusControl(Step3.idx)}>
            <span className={style.text} >{Step3.idx + 1}</span>
            <div className={style.circle} />
          </span>
          <span className={style.progressLabel}>{Step3.stepName}</span>
        </span>
      </section>
    </>
  );
});

export default StepProgress;
