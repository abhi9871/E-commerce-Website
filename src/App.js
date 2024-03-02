import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartProvider from "./store/CartProvider";
import HomePage from "./pages/Home/Home";
import ShopPage from "./pages/Shop/Shop";
import AboutPage from "./pages/About/About";
import CartPage from "./pages/Cart/Cart";
import ContactPage from "./pages/Contact-Us/ContactUs";

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
