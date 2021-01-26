import axios from 'axios'

const GET_GOODS = 'GET_GOODS'
const GET_RATES = 'GET_RATES'
const UPDATE_RATES = 'UPDATE_RATES'
const SORTBY_PRICE = 'SORTBY_PRICE'
const SORTBY_NAME = 'SORTBY_NAME'

const initialState = {
  goods: [],
  currency: 'USD',
  currencyValue: 1,
  rates: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS: {
      return { ...state, goods: action.payload.goods }
    }
    case GET_RATES: {
      return { ...state, rates: action.payload.rates }
    }
    case UPDATE_RATES: {
      return {
        ...state,
        currency: action.payload.currency,
        currencyValue: action.payload.currencyValue
      }
    }
    case SORTBY_PRICE: {
      return {
        ...state,
        goods: action.payload.goods
      }
    }
    case SORTBY_NAME: {
      return {
        ...state,
        goods: action.payload.goods
      }
    }
    default:
      return state
  }
}

export const getGoods = () => async (dispatch) => {
  const goodsData = await axios('/api/v1/goods')
  dispatch({
    type: GET_GOODS,
    payload: {
      goods: goodsData.data
    }
  })
}

export const getRates = () => async (dispatch) => {
  const ratesData = await axios('/api/v1/rates')
  dispatch({
    type: GET_RATES,
    payload: {
      rates: ratesData.data.rates
    }
  })
}

export const updateRates = (FX) => {
  return (dispatch, getState) => {
    const store = getState()
    const { rates } = store.goodsReducer
    dispatch({
      type: UPDATE_RATES,
      payload: {
        currency: FX,
        currencyValue: rates[FX]
      }
    })
  }
}

export const sortbyPrice = (sortMethod) => {
  return (dispatch, getState) => {
    const store = getState()
    const { goods } = store.goodsReducer
    const sortedGoods = goods.sort((a, b) => (sortMethod === 'L-H' ? a.price - b.price : b.price - a.price))
    dispatch({
      type: SORTBY_PRICE,
      payload: {
        goods: sortedGoods
      }
    })
  }
}

export const sortbyName = (sortMethod) => {
  return (dispatch, getState) => {
    const store = getState()
    const { goods } = store.goodsReducer
    const sortedGoods = goods.sort((a, b) => (sortMethod === 'A-Z' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)))
    dispatch({
      type: SORTBY_NAME,
      payload: {
        goods: sortedGoods
      }
    })
  }
}
