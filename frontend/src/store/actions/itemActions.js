import { itemService } from '../../service/itemService'


export function loadItems(filterBy) { // Action Creator
    return (dispatch) => {
        return itemService.query(filterBy)
            .then(items => {
                const action = {
                    type: 'SET_ITEM',
                    items,
                    filterBy
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