import {useState} from 'react';
import CartContext from "./cart-context";

const CartProviderContext = (props) => {
    const [products, setProducts] = useState([]);

    const addProductHandler = (product) => {
        setProducts((prevProducts) => {
            const existingIndex = prevProducts.findIndex((item) => item.name === product.name);
            if(existingIndex === -1)
                return [...prevProducts, product];
            else{
                const updatedProducts = [...prevProducts];
            }
            
        })
    }
}