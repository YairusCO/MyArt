//import { appStoreService } from '../../services/appStoreService'
import { appStoreService } from '../../services/appStoreService'

//filterBy
export function loadItems(filterBy = {title:''}) { // Action Creator
    return (dispatch) => {
        return appStoreService.query(filterBy)
            .then(items => {
                console.log(items);
                const action = {
                    type: 'SET_ITEMS',
                    items
                }
                dispatch(action)
            })
    }
}

export function saveItem(item){
    return (dispatch) => {
        return appStoreService.save(item)
            .then(saveItem => {
                const action = {
                    type: (item._id) ? 'SAVE_ITEM' : 'ADD_ITEM',
                    item: saveItem
                  }
                dispatch(action)
            })
    }
}

// export function updateItem(itemToSave, desc, loggedUser) {
//     return (dispatch) => {
//         return appStoreService.handleItemChanges(itemToSave, desc, loggedUser)
//             .then(updateItem => {
//                 const action = {
//                     type: 'SET_ITEM',
//                     item: updateItem
//                 }
//                 dispatch(action)
//             })
//     }
// }

// export function addItem(item) {
//     return (dispatch) => {
//         return appStoreService.add(item)
//             .then(addItem => {
//                 const action = {
//                 type: 'ADD_ITEM',
//                 item: addItem
//             }
//             dispatch(action)
//             })
//         }
//     }


export function removeItem(itemId) {
    return (dispatch) => {
        return appStoreService.remove(itemId)
        .then(() => {
            const action = {
                type: 'REMOVE_ITEM',
                itemId
            }
            dispatch(action)
        })
    }
}

export function setFilter(filterBy) {
    
    return (dispatch) => {
        console.log(filterBy)
        const action = {
            type: 'FILTER',
            filterBy
        }
        dispatch(action)
        return Promise.resolve();
    }
}
