import React from 'react'
import { useDispatch } from 'react-redux'
import { updateRates } from '../redux/reducers/goodsReducer'

const Currencies = () => {
  const dispatch = useDispatch()
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-outline-dark" onClick={() => dispatch(updateRates('USD'))}>
        USD
      </button>
      <button type="button" className="btn btn-outline-dark" onClick={() => dispatch(updateRates('EUR'))}>
        EUR
      </button>
      <button type="button" className="btn btn-outline-dark" onClick={() => dispatch(updateRates('CAD'))}>
        CAD
      </button>
    </div>
  )
}

export default Currencies
