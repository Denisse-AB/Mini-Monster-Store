import { createContext, useEffect, useState, ReactNode } from "react";
import { Item, CartItem, ContextInterface } from "./cart-types";

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

export const CartContext = createContext<ContextInterface | any>({
  cartItems: [],
  addItemToCart: () => {},
  removeItem: () => {},
  itemsCount: 0,
  cartTotal: 0
});

export const CartProvider = ({ children }:Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [itemsCount, setItemsCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  const addItemToCart = (productToAdd:Item) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItem = (productToRemove:Item) => {
    setCartItems(removeCartItem(cartItems, productToRemove))
  }

  const clearCart = () => {
    setCartItems([])
  }

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


