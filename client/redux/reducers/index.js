import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import goodsReducer from './goodsReducer'
import basketReducer from './basketReducer'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  goodsReducer,
  basketReducer
})

export default createRootReducer
