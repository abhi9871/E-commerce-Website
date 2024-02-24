import React from 'react';

const CartContext = React.createContext({
    products: [],
    totalAmount: 0,
    addProduct: () => {},
    removeProduct: () => {}
});

export default CartContext;