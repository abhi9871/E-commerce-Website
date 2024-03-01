import { Fragment } from "react";
import Slider from "../../components/Slider/Slider";
import Category from "../../components/Category/Category";
import "./Shop.css";

const ShopPage = () => {
  return (
    <Fragment>
      <Slider />
      <Category />
    </Fragment>
  );
};

export default ShopPage;
