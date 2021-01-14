

const initialState = {
  reviews: [],
  filterBy: ''
}

export function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_REVIEWS':
      return { ...state, reviews: action.reviews, filterBy: action.filterBy }
    case 'ADD_REVIEW':
      return { ...state, reviews: [...state.reviews, action.review] }
    default:
      return state
  }
}
