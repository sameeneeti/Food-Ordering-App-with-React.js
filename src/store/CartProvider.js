import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmout =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartIndex];
    let updatedItem;
    let updatedItems;

    if (existingCartItem) {
     const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartIndex] = updatedItem;
    } else {
      updatedItem = { ...action.item };
      updatedItems = state.items.concat(updatedItem);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmout,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartIndex];
    const updatedItemAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if(existingCartItem.amount === 1){
      updatedItems = state.items.filter(item => item.id !== action.id)
    }else{
      const updatedItem = {...existingCartItem, amount: existingCartItem.amount-1}
      updatedItems = [...state.items]
      updatedItems[existingCartIndex] = updatedItem
    }

    return({
      items: updatedItems,
      totalAmount: updatedItemAmount
    })
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItemCart: addItemCartHandler,
    removeItemCart: removeItemCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
