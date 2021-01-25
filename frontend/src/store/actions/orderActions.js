import { orderService } from '../../services/orderService'


export function loadOrders() { // Action Creator
    return async (dispatch) => {
        const orders = await orderService.query()
        const action = {
            type: 'SET_ORDERS',
            orders,
        }
        dispatch(action)
    }
}

export function addOrder(order) {
    return async (dispatch) => {
        const saveOrder = await orderService.add(order)
        const action = {
            type: 'ADD_ORDER',
            order: saveOrder
        }
        dispatch(action)
    }
}

// export function removeOrder(order) {
//     return (dispatch) => {
//         return orderService.remove(order._id)
//             .then(() => {
//                 const removeId = order._id;
//                 const action = {
//                     type: 'DELETE_ORDER',
//                     removeId
//                 }
//                 dispatch(action);
//             })
//     }
// }