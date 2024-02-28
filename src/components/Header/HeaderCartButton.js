import { useContext } from "react";
import { ShoppingCart } from "react-feather";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import "./HeaderCartButton.css";

const HeaderCartButton = ({handleShow}) => {
  const cartCtx = useContext(CartContext);
  const numOfCartItems = cartCtx.items.reduce((curr, product) => curr + product.quantity, 0);
  return (
    <div className="text-center">
      <Button className="flex shadow rounded-5 px-4 py-2 bg-body-tertiary fw-bold align-items-center border-0 cart-button m-2 position-relative" onClick={handleShow}>
        <ShoppingCart fill="black" className="text-dark" size={20} />
        <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {numOfCartItems}<span className="visually-hidden">products</span>
        </span>
      </Button>
    </div>
  );
};

export default HeaderCartButton;
