import StepProgress from './StepProgress';
import Header from './Header';
import Cart from './Cart';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ProgressControl from './ProgressControl';
import Footer from './Footer';
import React from "react";

const STEP_MAP = [Step1, Step2, Step3];

type ProductDataType = {
  id: string,
  name: string,
  img: string,
  price: number,
  quantity: number,
};

const productData: ProductDataType[] = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]



export default function App() {
  const [product, setProduct] = React.useState(productData);
  const [step, setStep] = React.useState(0);
  let StepControl = STEP_MAP[step];

  return (
    <>
      <Header />
      <main className="site-main">
        <div className="container main-container row">
          <section className="register-container col col-lg-7 col-sm-12">
            <StepProgress step={step} />
            <StepControl />
            <ProgressControl step={step} setStep={setStep} />
          </section>
          <section className="cart-container col col-lg-4 col-sm-12">
            <Cart
              productList={product}
              onSetProductList={setProduct} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

