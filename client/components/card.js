import React from 'react'
import { useDispatch } from 'react-redux'
import { getItem, getHeaderData } from '../redux/reducers/basketReducer'

const Card = ({ item, currencyValue, basketGood }) => {
  const dispatch = useDispatch()

  return (
    <div className="card p-1">
      <img alt="item" src={item.image} />
      <div className="card-body pl-2">
        <div>Price: {(item.price * currencyValue).toFixed(2)}</div>
        <p>{item.title}</p>
        <p className="mb-1">In Basket: {basketGood}</p>
        <button
          type="button"
          className="btn btn-light mt-2"
          onClick={() => {
            dispatch(getItem(item.id))
            dispatch(getHeaderData())
          }}
        >
          Add to Basket
        </button>
      </div>
    </div>
  )
}

export default Card
