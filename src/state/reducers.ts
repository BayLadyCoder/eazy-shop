import { combineReducers } from "redux";
import {
  API_GET_ALL_PRODUCTS_SUCCESS,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
} from "./actions";

// Types
import { CartItemType, ProductState, CartState, ActionTypes } from "../Types";

const productInitialState = {
  products: [],
  isLoading: true,
};
const cartInitialState = {
  items: [],
};

export const productReducer = (
  state: ProductState = productInitialState,
  action: ActionTypes<CartItemType[]>
): ProductState => {
  const { type, payload } = action;

  switch (type) {
    case API_GET_ALL_PRODUCTS_SUCCESS:
      return { products: payload, isLoading: false };
    default:
      return state;
  }
};

export const cartReducer = (
  state: CartState = cartInitialState,
  action: ActionTypes<CartItemType | number>
): CartState => {
  const { type, payload } = action;
  let newStateItems: CartItemType[];

  switch (type) {
    case ADD_ITEM_TO_CART:
      let isItemInCart;
      if (typeof payload === "object")
        isItemInCart = state.items.find((item) => {
          return item.id === payload.id;
        });
      if (isItemInCart) {
        newStateItems = state.items.map((item) => {
          if (typeof payload === "object" && item.id === payload.id) {
            return { ...item, amount: item.amount + 1 };
          } else {
            return item;
          }
        });
      } else {
        if (typeof payload === "object")
          newStateItems = [...state.items, { ...payload, amount: 1 }];
      }
      return { ...state, items: newStateItems! };
    case REMOVE_ITEM_FROM_CART:
      newStateItems = state.items.reduce(
        (acc: CartItemType[], item: CartItemType) => {
          if (item.id === payload) {
            if (item.amount === 1) {
              return acc.filter((item) => item.id !== payload);
            } else {
              return [...acc, { ...item, amount: item.amount - 1 }];
            }
          } else {
            return [...acc, item];
          }
        },
        [] as CartItemType[]
      );
      return { ...state, items: newStateItems };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
