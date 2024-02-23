import { ShoppingCart } from "react-feather";
import { Button } from "react-bootstrap";
import './HeaderCartButton.css';

const HeaderCartButton = () => {
    return (
        <div className="text-center">
        <Button className='flex shadow rounded-5 px-4 py-2 bg-body-tertiary fw-bold align-items-center border-0 cart-button m-2'>
            <ShoppingCart fill="black" className="text-dark" size={20} />
            <span className="ms-2 text-dark">Your Cart</span>
            <span className="badge rounded-5 px-2 ms-3 cart-count">0</span>
            </Button>
            </div>
    )
}

export default HeaderCartButton;