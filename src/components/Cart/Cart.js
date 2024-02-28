import { useState, useEffect, Fragment, useContext } from "react";
import { Offcanvas, Card, Button, Image, Table } from "react-bootstrap";
import OrderPlacedModal from "../Order/OrderPlacedModal";
import Loader from "../Loader/Loader";
import CartContext from "../../store/cart-context";
import "./Cart.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isMsgShown, setIsMsgShown] = useState(false);
  const [showOrderPlaced, setShowOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showOrderPlacedHandler = () => {
    setIsLoading(true);
    cartCtx.resetCart();
    setTimeout(() => {
      setIsLoading(false);
      setShowOrderPlaced(true);
      setIsMsgShown(true);
    }, 1000);
  }

  const hideOrderPlacedHandler = () => {
    setShowOrderPlaced(false);
  }

  const deleteItemHandler = (e) => {
    const itemId = parseInt(e.target.id);
    cartCtx.removeProduct(itemId);
  };

  const addItemHandler = (e) => {
    const itemId = parseInt(e.target.id);
    const product = cartCtx.items.find((item) => item.id === itemId);
    cartCtx.addProduct(product);
  };

  useEffect(() => {
    // Check if all items are removed
    setIsMsgShown(cartCtx.items.every((product) => product.quantity === 0));
  }, [cartCtx.items]);

  return (
    <Fragment>
      <Offcanvas {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-center">
            Shopping Cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {isLoading ? (
            <Loader className="m-auto" />
          ) : isMsgShown ? (
            <Card className="m-auto">
              <Card.Body className="text-center fw-bold">
                <p>Your cart is empty..😢</p>
                <div className="d-flex justify-content-center">
                  <button className="button rounded-pill px-4 fw-bold ms-1">
                    Shop now
                    <svg class="cartIcon" viewBox="0 0 576 512">
                      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                    </svg>
                  </button>
                </div>
              </Card.Body>
            </Card>
          ) : (
            <>
              <Table responsive bordered hover>
                <thead>
                  <tr>
                    <th className="text-center">Image</th>
                    <th className="text-center">Title</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {cartCtx.items.map(
                    (product) =>
                      product.quantity > 0 && (
                        <tr key={product.id}>
                          <td>
                            <Image
                              src={product.imageUrl}
                              alt={product.title}
                              thumbnail
                              className="me-3"
                            />
                          </td>
                          <td className="text-center">{product.title}</td>
                          <td className="text-center">${product.price}</td>
                          <td className="text-center">
                            <div className="d-flex align-items-center">
                              <Button
                                id={product.id}
                                className="cart-btn m-1 bg-transparent border-none border-danger-subtle text-danger fw-bold"
                                style={{ fontSize: "0.8rem" }}
                                onClick={deleteItemHandler}
                                size="sm"
                              >
                                -
                              </Button>
                              <span
                                className="border rounded px-2 py-1 fw-bold mx-2"
                                style={{ fontSize: "0.8rem" }}
                              >
                                {product.quantity}
                              </span>
                              <Button
                                id={product.id}
                                className="cart-btn bg-transparent border-none border-danger-subtle text-danger fw-bold"
                                style={{ fontSize: "0.8rem" }}
                                onClick={addItemHandler}
                                size="sm"
                                disabled={product.quantity < 1}
                              >
                                +
                              </Button>
                            </div>
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3}>
                      <div className="text-center">
                        <h5>Total Amount</h5>
                      </div>
                    </td>
                    <td colSpan={1}>
                      <div className="text-center">
                        <h5>${cartCtx.totalAmount.toFixed(2)}</h5>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4} className="bg-body-secondary">
                      <div className="d-flex justify-content-center">
                        <Button
                          variant="success"
                          className="rounded-pill border px-4 fw-bold ms-1"
                          onClick={showOrderPlacedHandler}
                        >
                          Place Order
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </Table>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      {showOrderPlaced && <OrderPlacedModal show={showOrderPlacedHandler} hide={hideOrderPlacedHandler} />}
    </Fragment>
  );
};

export default Cart;
