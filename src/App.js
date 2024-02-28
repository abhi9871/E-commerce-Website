import { useState } from "react";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import OrderPlacedCard from "./components/Order/OrderPlacedModal";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import CartProvider from "./store/CartProvider";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <CartProvider>
    <OrderPlacedCard/>
    {show && <Cart placement='end' name='end' show = {show} onHide = {handleClose} />}
    <Header handleShow = {handleShow} />
    <Category />
    <Footer />
    </CartProvider>
  );
}

export default App;
