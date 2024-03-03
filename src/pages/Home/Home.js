import { Fragment } from 'react';
import sliderImage1 from '../../assets/online_store1.jpg';
import sliderImage2 from '../../assets/online_store2.jpg';
import sliderImage3 from '../../assets/online_store3.jpg';
import Slider from '../../components/Slider/Slider';
import CategorySlider from '../../components/Slider/CategorySlider';
import './Home.css';

const sliderArr = [sliderImage1, sliderImage2, sliderImage3];

const HomePage = () => {
    return (
        <Fragment>
            <Slider slides = {sliderArr} />
            <CategorySlider />
        </Fragment>
    )
}

export default HomePage;