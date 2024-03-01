import { Fragment } from 'react';
import offerImage from '../../assets/offer_image.jpg';
import ProductSlider from '../../components/Slider/ProductSlider';
import './Home.css';

const HomePage = () => {
    return (
        <Fragment>
            <div>
              <img src={offerImage} alt='Limited_Offer' className='offer-img'/>  
            </div>
            <ProductSlider />
        </Fragment>
    )
}

export default HomePage;