import {useState} from 'react';
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [products, setProducts] = useState([]);

    const addProductHandler = (product) => {
        setProducts((prevProducts) => {
            const existingIndex = prevProducts.findIndex((item) => item.id === product.id);
            if(existingIndex === -1)
                return [...prevProducts, {...product, quantity: 1}];
            else{
                    return prevProducts.map((item, index) =>
                      index === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
                    );
                  }
        })
    }

    const removeProductHandler = (id) => {
        setProducts((prevProducts) => {
            const existingIndex = prevProducts.findIndex((item) => item.id === id);
            const updatedProducts = [...prevProducts];
            if(updatedProducts[existingIndex].quantity === 1){
                updatedProducts.splice(existingIndex, 1);
            }
            else{
                updatedProducts[existingIndex].quantity -= 1;
            }
            return updatedProducts;
        })
    }

    const totalAmountHandler = (products) => {
        if(products.length === 0)
            return 0;
        console.log(products);
        const totalAmount = products.reduce((curr, item) => (item.quantity * item.price) + curr, 0);
        return totalAmount;
    }

    const resetCartHandler = () => {
        setProducts([]);
    }

    const cartContext = {
        items: products,
        totalAmount: totalAmountHandler(products),
        addProduct: addProductHandler,
        removeProduct: removeProductHandler,
        resetCart: resetCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;