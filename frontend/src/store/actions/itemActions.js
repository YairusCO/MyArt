import { itemService } from '../../services/itemService'
import { appStoreService } from '../../services/appStoreService'

//filterBy
export function loadItems() { // Action Creator
    return (dispatch) => {
        return appStoreService.query()
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
        return itemService.save(item)
            .then(saveItem => {
                const action = {
                    type: (item._id) ? 'SAVE_ITEM' : 'ADD_ITEM',
                    item: saveItem
                  }
                dispatch(action)
            })
    }
}

export function removeItem(itemId) {
    return (dispatch) => {
        return itemService.remove(itemId)
        .then(items => {
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
        const action = {
            type: 'FILTER',
            filterBy
        }
        dispatch(action)
    }
}