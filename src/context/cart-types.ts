export type Item = {
  id: number,
  imageUrl: string,
  name: string,
  price: number
}

export type CartItem = {
  quantity: number
} & Item;

// TODO: CHECK
// export type CartState = {
//   readonly cartItems: CartItem[],
//   readonly addItemToCart: void,
//   readonly removeItem: void,
//   readonly cartTotal: number
// }
