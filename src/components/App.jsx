import StepProgress from './StepProgress/StepProgress';
import Header from './Header/Header';
import Cart from './Cart/Cart';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import ProgressControl from './ProgressControl';
import Footer from './Footer';

// import 'css/main.scss';

const App = () => {
  return (
    <>
      <Header />
      <main className="site-main">
        <div className="container main-container row">
          <section className="register-container col col-lg-7 col-sm-12">
            <StepProgress />
            <Step1 />
            <Step2 />
            <Step3 />
            <ProgressControl />
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

export default App;
