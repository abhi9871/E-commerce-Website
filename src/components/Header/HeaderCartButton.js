import { ShoppingCart } from "react-feather";
import { Button } from "react-bootstrap";
import "./HeaderCartButton.css";

const HeaderCartButton = ({showCartOnClick}) => {
  return (
    <div className="text-center">
      <Button className="flex shadow rounded-5 px-4 py-2 bg-body-tertiary fw-bold align-items-center border-0 cart-button m-2 position-relative" onClick={showCartOnClick}>
        <ShoppingCart fill="black" className="text-dark" size={20} />
        <span class="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          0<span class="visually-hidden">products</span>
        </span>
      </Button>
    </div>
  );
};

export default HeaderCartButton;
