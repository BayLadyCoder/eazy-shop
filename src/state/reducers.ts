import { combineReducers } from 'redux';
import {
    API_GET_ALL_PRODUCTS_SUCCESS,
    // API_GET_ALL_PRODUCTS_FAIL,
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
} from './actions'

// Types
import { CartItemType, ProductState, CartState, Actions } from '../Types'


const ProductInitialState = {
    products: [],
    isLoading: true
}
const CartInitialState = {
    items: [],
}



export const productReducer = (state: ProductState = ProductInitialState, action: Actions): ProductState => {
    const { type, payload } = action;

    switch (type) {
        case API_GET_ALL_PRODUCTS_SUCCESS:
            return { products: payload, isLoading: false }
        default:
            return state

    }
}



export const cartReducer = (state: CartState = CartInitialState, action: Actions): CartState => {
    const { type, payload } = action;
    let newStateItems: CartItemType[];

    switch (type) {
        case ADD_ITEM_TO_CART:
            const isItemInCart = state.items.find((item) => item.id === payload?.id);
            if (isItemInCart) {
                newStateItems = state.items.map((item) => {
                    if (item.id === payload?.id) {
                        return { ...item, amount: item.amount + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                newStateItems = [...state.items, { ...payload, amount: 1 }];
            }
            return { ...state, items: newStateItems }
        case REMOVE_ITEM_FROM_CART:
            newStateItems = state.items.reduce((acc: CartItemType[], item: CartItemType) => {
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
            return { ...state, items: newStateItems }
        default:
            return state

    }
}





const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer
})

export default rootReducer;