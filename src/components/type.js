export type ProductType = {
  id: string,
  name: string,
  img: string,
  price: number,
  quantity: number,
};

export type CartItemType = {
  id: string,
  img: string,
  name: String,
  price: number,
  quantity: number,
};

export type Shipping = {
  id: string,
  name: string,
  period: string,
  price: number,
};

export type State = {
  cartItem: CartItem,
  totalAmount: number,
  shipping: Shipping | null,
};
