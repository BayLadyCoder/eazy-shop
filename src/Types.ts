// Types
export type CartItemType = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  amount: number;
};

export type AppState = {
  products: ProductState;
  cart: CartState;
};

export type ProductState = {
  products: CartItemType[];
  isLoading: boolean;
};
export type CartState = {
  items: CartItemType[];
};

export type ActionTypes<T> = { type: string; payload: T };
