import axios from 'axios'

const GET_GOODS = 'GET_GOODS'
const GET_RATES = 'GET_RATES'

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
