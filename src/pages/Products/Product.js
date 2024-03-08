import { Fragment } from "react";
import Slider from "../../components/Slider/Slider";
import Products from "./ProductPage"
import bigSale from "../../assets/big_sale.png";
import specialOffer from "../../assets/special_offer.png";
import wowSale from "../../assets/wow_sale.png";

const offersArr = [bigSale, specialOffer, wowSale];

const ProductPage = () => {

  return (
    <Fragment>
      <Slider slides={offersArr} />
      <Products />
    </Fragment>
  );
};

export default ProductPage;
