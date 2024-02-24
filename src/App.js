import { useState, Fragment } from "react";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => setShowCart(true);;

  const hideCartHandler = () => setShowCart(false);
  return (
    <Fragment>
    {showCart && <Cart onClose = {hideCartHandler} />}
    <Header onShow = {showCartHandler} />
    <Category />
    <Footer />
    </Fragment>
  );
}

export default App;
