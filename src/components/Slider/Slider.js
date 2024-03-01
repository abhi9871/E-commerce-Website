import Carousel from 'react-bootstrap/Carousel';
import sliderImage from '../../assets/ecommerce.jpg';
import sliderImage1 from '../../assets/online_store1.jpg';
import sliderImage2 from '../../assets/online_store3.jpg';
import './Slider.css';

const Slider = () => {
    return (
        <Carousel>
          <Carousel.Item>
          <img
          className="slider-img"
          src={sliderImage}
          alt="Online Shop"
        />
          </Carousel.Item>
          <Carousel.Item>
          <img
          className="slider-img"
          src={sliderImage1}
          alt="Online Shop"
        />
          </Carousel.Item>
          <Carousel.Item>
          <img
          className="slider-img"
          src={sliderImage2}
          alt="Online Shop"
        />
          </Carousel.Item>
        </Carousel>
      );
}

export default Slider;