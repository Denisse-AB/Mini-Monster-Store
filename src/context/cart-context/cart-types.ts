export type Item = {
  id: number,
  imageUrl: string,
  name: string,
  price: number
}

export type CartItem = {
  quantity: number
} & Item;

export type ContextInterface = {
  cartItems: CartItem[],
  addItemToCart: () => {},
  removeItem: () => {},
  itemsCount: number,
  cartTotal: number
}