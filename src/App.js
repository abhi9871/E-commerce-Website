import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import CartProvider from "./store/CartProvider";
import HomePage from "./pages/Home/Home";
import AboutPage from "./pages/About/About";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleCloseCart = () => setShowCart(false);

  const handleShowCart = () => setShowCart(true);

  return (
    <Router>
    <CartProvider>
    {showCart && <Cart placement='end' name='end' show = {showCart} onHide = {handleCloseCart} />}
    <Header handleShowCart = {handleShowCart} handleCloseCart = {handleCloseCart} />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    <Footer />
    </CartProvider>
    </Router>
  );
}

export default App;
