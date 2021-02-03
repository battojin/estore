import React from 'react'
import { useDispatch } from 'react-redux'
import { updateRates } from '../redux/reducers/goodsReducer'

const Currencies = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button type="button" className="currency" onClick={() => dispatch(updateRates('USD'))}>
        USD
      </button>
      <button type="button" className="currency" onClick={() => dispatch(updateRates('EUR'))}>
        EUR
      </button>
      <button type="button" className="currency" onClick={() => dispatch(updateRates('CAD'))}>
        CAD
      </button>
    </div>
  )
}

export default Currencies
