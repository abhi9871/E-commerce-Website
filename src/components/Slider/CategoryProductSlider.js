import React from "react";
import Slider from "react-slick";
import { Container, Card } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CategorySlider.css";

const CategoryProductSlider = (props) => {
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
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="shadow-lg rounded">
      <div className="slider-container">
        <h2 className="text-center fw-bold py-4">
          {props.categoryName.charAt(0).toUpperCase() +
            props.categoryName.substring(1)}
        </h2>
        <Slider {...settings}>
          {props.categorizedProducts.map((category) => (
            <div key={category.id} className="card-container">
            <NavLink to={`/products/${category.id}`} className="text-decoration-none">
              <Card
                id={category.id}
                style={{ width: "18rem" }}
                className="card-width p-2 my-4 m-auto shadow-lg"
              >
                <div className="zoom-image-container">
                  <Card.Img
                    variant="top"
                    src={category.image}
                    className="zoom-image"
                    height={300}
                  />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>{category.title}</Card.Title>
                  <Card.Text className="fw-bold mt-3 fs-4">
                    &#8377;{category.price}
                  </Card.Text>
                </Card.Body>
              </Card>
              </NavLink>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default CategoryProductSlider;
