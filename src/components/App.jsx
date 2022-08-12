import StepProgress from './StepProgress';
import Header from './Header';
import Cart from './Cart';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import ProgressControl from './ProgressControl';
import Footer from './Footer';
import { productData, shippingRadioData } from './config'
import { CartContext } from './Cart/CartContext'
import React, { useCallback, useState } from 'react';

import useShoppingCart from '../hooks/useShoppingCart'
import {
  actionUpdateQuantity,
  actionRemoveItem,
  actionApplyShipping
} from '../hooks/actions'

const STEP_MAP = [Step1, Step2, Step3];


export default function App() {
  const [step, setStep] = useState(1);
  const StepControl = STEP_MAP[step - 1];


  const [state, dispatch] = useShoppingCart();
  const { cartItems } = state;


  const atUpdateQuantity = useCallback(
    (id, quantity) => {
      dispatch(actionUpdateQuantity(id, quantity))
    }, [dispatch]
  )

  const atRemoveItem = useCallback(
    (id) => {
      dispatch(actionRemoveItem(id))
    }, [dispatch]
  )
  const atApplyShipping = useCallback(
    (shipping) => {
      dispatch(actionApplyShipping(shipping));
    },
    [dispatch],
  )

  const providerValue = {
    // products,
    productData,
    cartItems,
    step,
    setStep,
    atUpdateQuantity,
    atRemoveItem,
    atApplyShipping,
    state
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

