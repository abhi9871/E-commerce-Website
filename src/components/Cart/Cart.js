import { useEffect, useState, Fragment } from "react";
import ReactDOM from "react-dom";
import { Card, Button } from "react-bootstrap";
import "./Cart.css";

const CartModal = ({onClose}) => {
//   const [isMsgShown, setIsMsgShown] = useState(false);

//   const deleteItemHandler = (e) => {
//     const itemId = e.target.id;
//     cartCtx.removeFromCart(itemId);
//   };

//   const addItemHandler = (e) => {
//     const itemId = e.target.id;
//     cartCtx.addToCart(itemId);
//   };

//   useEffect(() => {
//     // Check if all items are removed
//     setIsMsgShown(cartCtx.medicines.every((medicine) => medicine.medicineCartQuantity === 0));
//   }, [cartCtx.medicines]);

  return (
    <Fragment>
      <div className="overlay" onClick={onClose}></div>
      <div className="container custom-card-container">
        <Card>
                    <Card.Body
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex flex-column">
                        <div className="fw-bold mb-2"></div>
                        <div>
                          <span className="fw-bold text-danger">
                            
                          </span>
                          <span className="border rounded px-2 py-1 fw-bold ms-5">
                            x 1
                          </span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <Button
                          className="cart-btn m-1 bg-transparent border-none border-danger-subtle text-danger fw-bold"
                        >
                          -
                        </Button>
                        <Button
                          className="cart-btn ms-1 bg-transparent border-none border-danger-subtle text-danger fw-bold"
                        >
                          +
                        </Button>
                      </div>
                    </Card.Body>
              <Card.Footer className="d-block">
                <div className="d-flex justify-content-between">
                  <h5>Total Amount</h5>
                  <h5>$0.00</h5>
                </div>
                <div className="d-inline-block float-end">
                  <Button
                    className="close-button rounded-pill px-4 fw-bold me-1 bg-transparent border-none border-danger-subtle text-danger"
                    onClick={onClose}
                  >
                    Close
                  </Button>
                  <Button className="order-button rounded-pill border px-4 fw-bold ms-1">
                    Order
                  </Button>
                </div>
              </Card.Footer>
        </Card>
      </div>
    </Fragment>
  );
};

const Cart = ({onClose}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <CartModal onClose={onClose} />,
        document.getElementById("cart-model")
      )}
    </Fragment>
  );
};

export default Cart;
