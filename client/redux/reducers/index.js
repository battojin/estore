import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import goodsReducer from './goodsReducer'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  goodsReducer
})

export default createRootReducer
