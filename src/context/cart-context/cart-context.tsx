import { createContext, useEffect, useState, ReactNode } from "react";
import { Item, CartItem } from "./cart-types";

const addCartItem = (cartItems:CartItem[], productToAdd:Item): CartItem[] => {
  const existingCartItem = cartItems.find((cartItem:Item) =>
    cartItem.id === productToAdd.id
  )
  // If product, increae qty
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
      ? {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
    )
  }

  return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems:CartItem[], productToRemove:Item):CartItem[] => {
  return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
}

interface Props {
  children?: ReactNode
}

// TODO: CHECK ANY TYPE https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/
export const CartContext:any = createContext({
  cartItems: [],
  addItemToCart: ():void => {},
  removeItem: ():void => {},
  itemsCount: 0,
  cartTotal: 0
});

export const CartProvider = ({ children }:Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [itemsCount, setItemsCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  const addItemToCart = (productToAdd:Item) => {
    // TODO: SEND TO LOCAL STORAGE
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItem = (productToRemove:Item) => {
    // TODO: DELETE FROM LOCAL STORAGE
    setCartItems(removeCartItem(cartItems, productToRemove))
  }

  const clearCart = () => {
    setCartItems([])
  }

  // TODO: use effect to check local storage
  
  // Items Counter
  useEffect(() => {
     const newItemsCount = cartItems.reduce((total, cartItem) =>
      total + cartItem.quantity, 0)
      setItemsCount(newItemsCount)
  }, [cartItems])

  // Total
  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) =>
      total + cartItem.quantity * cartItem.price, 0)
      setCartTotal(newCartTotal)
  }, [cartItems])

  // TODO: CONST VALUE THAT TROW TYPE ERROR value:USE INTERFACE here
  const value = {
    cartItems,
    itemsCount,
    cartTotal,
    addItemToCart,
    removeItem,
    clearCart,
  };
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}


