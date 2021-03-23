import { CartItemType } from './../Types';
import {
    API_GET_ALL_PRODUCTS,
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    GET_TOTAL_ITEMS_IN_CART
} from './actions'
import { CartItemType } from '../Types'


type ProductState = {
    products: CartItemType[];
}
type CartState = {
    items: CartItemType[];
}

type Action = {
    type: string;
    payload: any
}

const ProductInitialState = {
    products: []
}
const CartInitialState = {
    items: []
}



export const productReducer = (state: ProductState = ProductInitialState, action: Action) {
    const { type, payload } = action;

    switch (type) {
        case API_GET_ALL_PRODUCTS:
            return { products: payload }
        default:
            return state

    }
}

export const cartReducer = (state: CartState = CartInitialState, action: Action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_ITEM_TO_CART:
            const isItemInCart = state.items.find((item) => item.id === payload.id);
            if (isItemInCart) {
                return state.items.map((item) => {
                    if (item.id === payload.id) {
                        return { ...item, amount: item.amount + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...state.items, { ...payload, amount: 1 }];
            }
        case REMOVE_ITEM_FROM_CART:
            const newState = state.items.reduce((acc: CartItemType[], item: CartItemType) => {
                if (item.id === payload) {
                    if (item.amount === 0) {
                        return acc;
                    } else {
                        return [...acc, { ...item, amount: item.amount - 1 }];
                    }
                } else {
                    return [...acc, item];
                }
            }, [] as CartItemType[])
            return newState
        case GET_TOTAL_ITEMS_IN_CART:
            return payload.reduce((acc: number, item: CartItemType) => acc + item.amount, 0)
        default:
            return state

    }
}