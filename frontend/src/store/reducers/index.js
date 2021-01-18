import { combineReducers } from 'redux'
import { reviewReducer } from './reviewReducer'
import { itemReducer } from './itemReducer'
import { userReducer } from './userReducer'
import { systemReducer } from './systemReducer'

export const rootReducer = combineReducers({
  systemModule: systemReducer,
  reviewModule: reviewReducer,
  itemModule: itemReducer,
  userModule: userReducer
})
