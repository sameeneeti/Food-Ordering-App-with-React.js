import { useState } from "react";
import CartProvider from "./store/CartProvider";
import Cart from "./component/Cart/Cart";

import Header from "./component/Layout/Headers";
import Meals from "./component/Meals/Meals";

function App() {

  const [cartIsShown , setCardIsShown] = useState(false);

  const showCartIsShown = () =>{
    setCardIsShown(true);
  }

  const hideCartIsShown = () =>{
    setCardIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartIsShown} />}
      <Header onShowCart = {showCartIsShown}/>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
