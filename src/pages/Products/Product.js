import { Fragment, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "../../components/Slider/Slider";
import Products from "./ProductPage"
import bigSale from "../../assets/big_sale.png";
import specialOffer from "../../assets/special_offer.png";
import wowSale from "../../assets/wow_sale.png";
import AuthContext from "../../store/auth-context";

const offersArr = [bigSale, specialOffer, wowSale];

const ProductPage = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoggedIn){
      navigate('/login');
    }
  },[isLoggedIn, navigate])

  return (
    <Fragment>
      <Slider slides={offersArr} />
      <Products />
    </Fragment>
  );
};

export default ProductPage;
