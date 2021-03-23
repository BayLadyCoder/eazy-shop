import { ThunkAction } from 'redux-thunk'
import { Action } from 'redux'

// Types
import { CartItemType, AppState } from '../Types'

// Action Types
export const API_GET_ALL_PRODUCTS_SUCCESS: string = "API_GET_ALL_PRODUCTS_SUCCESS";
export const API_GET_ALL_PRODUCTS_FAIL: string = "API_GET_ALL_PRODUCTS_FAIL";
export const ADD_ITEM_TO_CART: string = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART: string = "REMOVE_ITEM_FROM_CART";



export const addToCart = (item: CartItemType) => ({
    type: ADD_ITEM_TO_CART,
    payload: item
})

export const removeItemFromCart = (id: number) => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: id
})



// API calls
export const apiGetAllProducts = (): ThunkAction<void, AppState, unknown, Action<string>> => async (dispatch) => {

    try {
        const res = await fetch("https://fakestoreapi.herokuapp.com/products");
        const data: CartItemType[] = await res.json();
        dispatch({ type: API_GET_ALL_PRODUCTS_SUCCESS, payload: data })
    } catch (error) {
        console.log(error.message)
        // return ({ type: API_GET_ALL_PRODUCTS_FAIL, payload: error })

    }

};