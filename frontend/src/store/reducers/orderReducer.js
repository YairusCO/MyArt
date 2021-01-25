// const { createStore } = Redux

// import { useReducer } from 'react';
// import {appStoreService} from 'frontend\src\services\appStoreService.js'

// // const items = appStoreService.query();
// console.log('Items', items);

const initialState = {
    order: {
        item: [],
        userId: '',
      },
      orders: []
}

export function orderReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ORDERS':
            return {...state, orders: action.orders}
        case 'DECREMENT':
            return {...state, count: state.count - 1}
        case 'ADD_ORDER':
            return {...state, orders: [...state.orders, action.order]}
        case 'REMOVE_FROM_CART':
            return {...state, orders: state.cartItems.filter(item => item._id !== action.itemId)}
        default:
            return state
    }
}