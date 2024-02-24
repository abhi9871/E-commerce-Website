import Carousel from 'react-bootstrap/Carousel';
import sliderImage from '../../assets/ecommerce.jpg';
import './Slider.css';

const Slider = () => {
    return (
        <Carousel>
          <Carousel.Item>
          <img
          className="slider-img"
          src={sliderImage}
          alt="First slide"
        />
          </Carousel.Item>
          <Carousel.Item>
          <img
          className="slider-img"
          src={sliderImage}
          alt="Second slide"
        />
          </Carousel.Item>
          <Carousel.Item>
          <img
          className="slider-img"
          src={sliderImage}
          alt="Third slide"
        />
          </Carousel.Item>
        </Carousel>
      );
}

export default Slider;