import {CartItemType} from '../Types'

// Action Types
export const API_GET_ALL_PRODUCTS:string = "API_GET_ALL_PRODUCTS";
export const ADD_ITEM_TO_CART:string = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART:string = "REMOVE_ITEM_FROM_CART";
export const GET_TOTAL_ITEMS_IN_CART:string = "GET_TOTAL_ITEMS_IN_CART";


export const addToCart = (item:CartItemType) => ({
    type: ADD_ITEM_TO_CART,
    payload: item
})

export const removeItemFromCart = (id:number) => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: id
})

export const getTotalItemsInCart = (items:CartItemType[]) => ({
    type: GET_TOTAL_ITEMS_IN_CART,
    payload: items
})


// API calls
export const apiGetAllProducts = async() => {
    const res = await fetch("https://fakestoreapi.herokuapp.com/products");
    const data = await res.json();
    return ({type: API_GET_ALL_PRODUCTS, payload: data}) 
};