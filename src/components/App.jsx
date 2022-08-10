import StepProgress from './StepProgress';
import Header from './Header';
import Cart from './Cart';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ProgressControl from './ProgressControl';
import Footer from './Footer';
import { CartContext } from './Cart/CartContext'
import React, { useState } from 'react';


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
  const [products, setProducts] = useState(productData);
  const [step, setStep] = useState(1);
  const StepControl = STEP_MAP[step - 1];
  const [totalAmount, setTotalAmount] = useState(0)

  React.useEffect(() => {
    const calcTotalAmount = products.reduce((total, currentItem) => {
      return total + currentItem.price * currentItem.quantity;
    }, 0);

    return setTotalAmount(calcTotalAmount);
  }, [products]);

  const onRemoveItem = (id: string) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  }

  const atUpdateQuantity = (id: Number, changedQuantity: Number) => {

    setProducts((prev) => {
      if (changedQuantity <= 0) return
      return prev.map((item) => {
        if (item.id === id) {

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            img: item.img,
            quantity: changedQuantity,
          };
        }
        return item;
      });
    });
  }
  const providerValue = {
    products,
    step,
    setStep,
    totalAmount,
    atUpdateQuantity,
    onRemoveItem
  }



  return (
    <>
      <Header />
      <main className="site-main">
        <div className="container main-container row">
          <CartContext.Provider value={providerValue}>
            <section className="register-container col col-lg-7 col-sm-12">
              <StepProgress />
              <StepControl />
              <ProgressControl />
            </section>
            <section className="cart-container col col-lg-4 col-sm-12">
              <Cart />
            </section>
          </CartContext.Provider>
        </div>
      </main>
      <Footer />

    </>
  );
};

