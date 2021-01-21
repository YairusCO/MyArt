// const { createStore } = Redux

// import { useReducer } from 'react';
// import {appStoreService} from 'frontend\src\services\appStoreService.js'

// // const items = appStoreService.query();
// console.log('Items', items);

const initialState = {
    count: 0,
    cartItems: [],
    // items,
}

export function cartReducer(state = initialState, action) {
    console.log('working!@#!@#!@#');
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'DECREMENT':
            return {...state, count: state.count - 1}
        case 'ADD_TO_CART':
            return {...state, cartItems: [...state.cartItems, action.item]}
        case 'REMOVE_FROM_CART':
            return {...state, cartItems: state.cartItems.filter(item => item._id !== action.itemId)}
        default:
            return state
    }
}
// export const store = createStore(cartReducer) 