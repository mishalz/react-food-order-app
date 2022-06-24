import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./Context/CartContextProvider";
import { useState } from "react";

function App() {
  const [displayCart, setDisplayCart] = useState(false);

  const displayCartHandler = () => {
    setDisplayCart(true);
  };
  const hideCartHandler = () => {
    setDisplayCart(false);
  };

  return (
    <CartContextProvider>
      {displayCart && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={displayCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
