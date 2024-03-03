import { Fragment } from "react";
import Slider from "../../components/Slider/Slider";
import ProductPage from "../Products/ProductPage";
import bigSale from "../../assets/big_sale.png";
import specialOffer from "../../assets/special_offer.png";
import wowSale from "../../assets/wow_sale.png";
import "./Shop.css";

const offersArr = [bigSale, specialOffer, wowSale];

const ShopPage = () => {
  return (
    <Fragment>
      <Slider slides={offersArr} />
      <ProductPage />
    </Fragment>
  );
};

export default ShopPage;
