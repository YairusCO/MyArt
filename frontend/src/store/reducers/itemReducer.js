// import { itemService } from '../../service/itemService.js'

const initialState = {
  items: [],
  filterBy: {filter: ''}
}

export function itemReducer(state = initialState, action) {

  switch (action.type) {
    case 'SET_ITEMS':
      console.log(action.items);
      return { ...state, items: action.items}
      case 'SET_ITEM':
            return {
                ...state,
                items: state.items.map(item => item._id === action.item._id ? action.item : item)
            }
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.saveOrder] }
    case 'SAVE_ITEM':
      return {
        ...state, items: state.items.map(item => {
          if (item._id === action.item._id) return action.item
          else return item
        })
      }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item._id !== action.itemId) }
    case 'FILTER':
      return { ...state, filterBy: action.filterBy }
    default:
      return state
  }
}