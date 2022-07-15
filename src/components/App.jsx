import StepProgress from './StepProgress';
import Header from './Header/Header';
import Cart from './Cart';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import ProgressControl from './ProgressControl';

// import 'css/main.scss';

const App = () => {
  return (
    <>
      <Header />
      <main className="site-main">
        <div className="container main-container">
          <section
            className="register-container col col-lg-6 col-sm-12"
            data-phase="1"
            data-total-price="0"
          >
            <StepProgress />
            <Step1 />
            <Step2 />
            <Step3 />
            <ProgressControl />
          </section>
          <Cart />
        </div>
      </main>
    </>
  );
};

export default App;
