// const { createStore } = Redux

// import { useReducer } from 'react';
// import {appStoreService} from 'frontend\src\services\appStoreService.js'

// // const items = appStoreService.query();
// console.log('Items', items);

const initialState = {
    order: {
        item: [],
        userId: '',
      }
}

export function orderReducer(state = initialState, action) {
    console.log('order Reducer on');
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'DECREMENT':
            return {...state, count: state.count - 1}
        case 'ADD_ORDER':
            console.log('add oreder');
            return {...state, orderItems: [...state.orderItems, action.item]}
        case 'REMOVE_FROM_CART':
            return {...state, orderItems: state.cartItems.filter(item => item._id !== action.itemId)}
        default:
            return state
    }
}
// export const store = createStore(cartReducer) 