import {
  API_GET_ALL_PRODUCTS_SUCCESS,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from './state/actions'

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
  products: ProductState,
  cart: CartState,
}

export type ProductState = {
  products: CartItemType[];
  isLoading: boolean,
}
export type CartState = {
  items: CartItemType[];
}


export type Actions = {
  type: string,
  payload: any
}
// export interface GetAllProductsType {
//   type: typeof API_GET_ALL_PRODUCTS_SUCCESS;
//   payload: CartItemType[]
// }

// export interface AddItemToCartType {
//   type: typeof ADD_ITEM_TO_CART;
//   payload?: CartItemType
// }

// export interface RemoveItemFromCartType {
//   type: typeof REMOVE_ITEM_FROM_CART;
//   payload?: number
// };

