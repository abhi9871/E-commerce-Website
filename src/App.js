import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CartProvider from "./store/CartProvider";
import HomePage from "./pages/Home/Home";
import ProductPage from "./pages/Products/Product";
import ProductDetail from "./pages/Products/ProductDetail";
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
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/categories/:categoryName" element={<ProductPage />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
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
