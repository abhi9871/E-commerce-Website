import { Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./OrderPlacedModal.css";

const OrderPlacedModal = ({ show, hide }) => {
  return (
    <Modal show={show} onHide={hide}>
      <Modal.Header>
        <Modal.Title className="m-auto">
          <div className="header">
            <div className="order-image">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M20 7L9.00004 18L3.99994 13"
                ></path>
              </svg>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="content">
          <span className="title">Order Placed</span>
          <p className="message">
            Thank you for your purchase. Your order will be delivered within 2
            days of your purchase.
          </p>
        </div>
        <div class="actions">
          <NavLink to="/products" className="text-decoration-none">
            <button type="button" className="shop" onClick={hide}>
              Back To Shop
            </button>
          </NavLink>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default OrderPlacedModal;
