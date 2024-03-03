import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';

const Slider = ({slides}) => {
    return (
        <Carousel>
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
            <img
            className="slider-img"
            src={slide}
            alt="Online Shop"
          />
          </Carousel.Item>
          ))}
        </Carousel>
      );
}

export default Slider;