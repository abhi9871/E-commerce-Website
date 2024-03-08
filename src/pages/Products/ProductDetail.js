import { useState, useEffect, useContext, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { Star } from "react-feather";
import AuthContext from "../../store/auth-context";
import CartContext from "../../store/cart-context";
import OrderPlacedModal from "../../components/Order/OrderPlacedModal";
import { fetchProductDetail } from "../../services/productApi";
import "./ProductDetail.css";

const ProductDetail = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const navigate = useNavigate();

  const { productId } = useParams();

  const [showOrderPlaced, setShowOrderPlaced] = useState(false);
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    const productHandler = async (productId) => {
      try {
        const product = await fetchProductDetail(productId);
        setProductDetail(product);
        console.log(product);
      } catch (error) {
        console.log(error);
      }
    };
    productHandler(productId);
  }, [productId]);

  const cartCtx = useContext(CartContext);
  let product;
  const addToCartHandler = (e) => {
    if(isLoggedIn){
    let productId = parseInt(e.target.id);
    product = cartCtx.items.find((item) => item.id === productId);
    if (!product) {
      product = productDetail;
    }
    return cartCtx.addProduct(product);
  } else{
    navigate("/login");
  }
  };

  const showOrderPlacedHandler = () => {
    if(isLoggedIn){
        setShowOrderPlaced(true);
    } else {
      navigate("/login");
    }
  };

  const hideOrderPlacedHandler = () => {
    setShowOrderPlaced(false);
  };

  return (
    <Fragment>
      <Container className="my-5">
        <Row className="flex-lg-row g-4 justify-content-around product-detail">
          <Col md={6} className="mx-auto">
            <Row>
              <Col lg={3} className="d-lg-block d-none">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <Image
                      key={index}
                      width={80}
                      height={50}
                      className="mb-2"
                      src={productDetail.image}
                      thumbnail
                    />
                  ))}
              </Col>
              <Col>
                <Image src={productDetail.image} className="img-fluid" />
                <div className="d-flex justify-content-between">
                  <Button
                    size="lg"
                    className="px-4 mt-3"
                    onClick={addToCartHandler}
                  >
                    Add To Cart
                  </Button>
                  <Button
                    size="lg"
                    variant="success"
                    className="px-4 mt-3"
                    onClick={showOrderPlacedHandler}
                  >
                    Buy Now
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <div>
              <h3>{productDetail.title}</h3>
              <h4 className="my-4">Price: &#8377;{productDetail.price}</h4>
              <div className="d-flex align-items-center mb-4">
              {productDetail.rating && productDetail.rating.rate && (
                <div className="d-flex align-items-center py-1 px-2 bg-success rounded-5 text-white fs-5 fw-bold">
                  <span>{productDetail.rating.rate}</span>
                  <span className="ms-1">
                    <Star color='white' fill="white" size={22} />
                  </span>
                </div>
              )}
              {productDetail.rating && productDetail.rating.count && (
                <span className="ms-2 text-secondary fs-6">
                  {productDetail.rating.count} Reviews
                </span>
              )}
            </div>
              <p>{productDetail.description}</p>
              <h5>Available offers</h5>
              <p>
                <b>Bank Offer:</b> Get ₹25* instant discount for the 1st Order
                using BOB UPI.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {showOrderPlaced && (
        <OrderPlacedModal
          show={showOrderPlacedHandler}
          hide={hideOrderPlacedHandler}
        />
      )}
    </Fragment>
  );
};

export default ProductDetail;