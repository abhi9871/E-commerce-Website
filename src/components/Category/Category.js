import { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import './Category.css';

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },

  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },

  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },

  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const Category = () => {
  const cartCtx = useContext(CartContext);
  let product;
  const addToCartHandler = (e) => {
    let productId = parseInt(e.target.id);
     product = cartCtx.items.find((item) => item.id === productId);
    if (!product) {
      product = productsArr.find((item) => item.id === productId);
    }
    return cartCtx.addProduct(product);
  }

  return (
    <Container>
        <h2 className="text-center fw-bold mt-4">Products</h2>
        <Row xs={1} md={2} lg={2} className="g-4 justify-content-center">
    {
        productsArr.map((product, index) => {
            return (
                <Col key={index} className="d-flex align-items-center justify-content-center">
                <Card style={{ width: "18rem" }} className="m-4 shadow-lg">
                <Card.Title className="text-center mt-3">{product.title}</Card.Title>
                <Card.Body>
                    <Card.Text className="zoom-image-container"> 
                    <img src={product.imageUrl} alt={product.imageUrltitle} className="image zoom-image" />
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                    <span className="fw-bold fs-4"><span>&#8377;</span>{product.price}</span>
                    <Button id={product.id} variant="primary" onClick={addToCartHandler}>Add To Cart</Button>
                    </div>
                </Card.Body>
                </Card>
                </Col>
            )
        })
    }
    </Row>
    </Container>
  );
};

export default Category;
