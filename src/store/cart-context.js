import React from "react";

const CartContext = React.createContext({
    items : [],
    totalAmount : 0, 
    addItemCart : (item) => {},
    removeItemCart : (id) => {}
});

export default CartContext