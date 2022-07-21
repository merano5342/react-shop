import StepProgress from './StepProgress';
import Header from './Header';
import Cart from './Cart';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
// import ProgressControl from './ProgressControl';
import Footer from './Footer';
import React from "react";

//for stepBtn
import './ProgressControl/ProgressControl.scss'
import { ReactComponent as LeftArrow } from '../assets/icons/left-arrow.svg';
import { ReactComponent as ReftArrow } from '../assets/icons/right-arrow.svg';

const STEP_MAP = [Step1, Step2, Step3];




export default function App() {

  const [stepIdx, setIdx] = React.useState(0);
  let StepControl = STEP_MAP[stepIdx];
<<<<<<< HEAD
=======
  const StepPhase = () => {
    setIdx(stepIdx + 1)
  }
>>>>>>> 6d05d48 (# This is a combination of 3 commits.)

  const TempBtn = () => {
    return (
      <section className="progress-control col col-12 ">
        <div className="d-flex justify-content-between">
          <button
            className="btn pre-btn px-5 py-2"
            type="button"
<<<<<<< HEAD
            data-active={!(stepIdx === 0)}
            disabled=''
=======
            data-active={stepIdx > 0}
            disabled={!(stepIdx > 0)}
>>>>>>> 6d05d48 (# This is a combination of 3 commits.)
            onClick={() => setIdx(stepIdx - 1)} >
            <LeftArrow className="left-arrow" alt="" />
            上一步
          </button>
          <button
            className="btn next-btn btn-primary px-5 py-2"
            type="button"
            data-active=""
            disabled={!(stepIdx < 2)}
            onClick={() => setIdx(stepIdx + 1)} >
            {stepIdx < 2 ? '下一步' : '確認下單'}
            <ReftArrow className="right-arrow" alt="" />
          </button>
        </div>
      </section>
    );
  };



  return (
    <>
      <Header />
      <main className="site-main">
        <div className="container main-container row">
          <section className="register-container col col-lg-7 col-sm-12">
            <StepProgress StepPhase={stepIdx} />

            <StepControl />
            <TempBtn />
          </section>
          <section className="cart-container col col-lg-4 col-sm-12">
            <Cart />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

