import React from "react";
import Slider from "react-slick";
import { Container, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import electronics from '../../assets/electronics.png';
import jewellery from '../../assets/jewellery.png';
import mensClothing from '../../assets/mens_clothing.png';
import womensClothing from '../../assets/womens_clothing.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CategorySlider.css";

const CategorySlider = () => {
      
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
  

  const categories = [
    {
      id: 1,
      title: "electronics",
      imageUrl: electronics,
    },
  
    {
      id: 2,
      title: "jewelery",
      imageUrl: jewellery,
    },
  
    {
      id: 3,
      title: "men's clothing",
      imageUrl: mensClothing,
    },
  
    {
      id: 4,
      title: "women's clothing",
      imageUrl: womensClothing,
    },
  ];
  
  return (
    <Container>
      <h2 className="text-center fw-bold my-4">Categories</h2>
    <div className="slider-container">
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id}>
            <NavLink to={`/products/categories/${category.title}`} className="text-decoration-none">
            <Card style={{ width: "18rem" }} className="card-width p-2 my-4 m-auto shadow-lg">
              <div className="zoom-image-container">
              <Card.Img variant="top" src={category.imageUrl} className="zoom-image" height={220} />
              </div>
              <Card.Body className="text-center">
                <Card.Title>{category.title[0].toUpperCase() + category.title.substring(1)}</Card.Title>
              </Card.Body>
            </Card>
            </NavLink>
          </div>
        ))}
      </Slider>
    </div>
    </Container>
  );
}

export default CategorySlider;