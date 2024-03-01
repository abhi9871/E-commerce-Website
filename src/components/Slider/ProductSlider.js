import React from "react";
import Slider from "react-slick";
import { Container, Card } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.css";

const ProductSlider = () => {
      
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };  
  

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
  
  return (
    <Container>
      <h2 className="text-center fw-bold my-4">Products</h2>
    <div className="slider-container">
      <Slider {...settings}>
        {productsArr.map((product) => (
          <div key={product.id}>
            <Card style={{ width: "18rem" }} className="card-width p-2 my-4 m-auto shadow-lg">
              <div className="zoom-image-container">
              <Card.Img variant="top" src={product.imageUrl} className="zoom-image" />
              </div>
              <Card.Body className="text-center">
                <Card.Title>{product.title}</Card.Title>
                 <Card.Text><span className="fw-bold fs-4"><span>&#8377;</span>{product.price}</span></Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
    </Container>
  );
}

export default ProductSlider;