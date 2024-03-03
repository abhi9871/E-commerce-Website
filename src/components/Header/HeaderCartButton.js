import { useContext } from "react";
import { ShoppingCart } from "react-feather";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartContext from "../../store/cart-context";
import "./HeaderCartButton.css";

const HeaderCartButton = () => {
  const cartCtx = useContext(CartContext);
  const numOfCartItems = cartCtx.items.reduce(
    (curr, product) => curr + product.quantity,
    0
  );
  return (
    <div className="text-center">
      <NavLink to="/cart" className="text-decoration-none">
        <Button className="flex shadow rounded-5 px-4 py-2 bg-body-tertiary fw-bold align-items-center border-0 cart-button m-2 position-relative">
          <ShoppingCart fill="black" className="text-dark" size={20} />
          <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {numOfCartItems}
            <span className="visually-hidden">products</span>
          </span>
        </Button>
      </NavLink>
    </div>
  );
};

export default HeaderCartButton;
