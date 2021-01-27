import React from 'react'
import { useDispatch } from 'react-redux'
import { getItem, getHeaderData } from '../redux/reducers/basketReducer'

const Card = ({ item, currencyValue, basketGood }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <img alt="item" src={item.image} />
      <div>{(item.price * currencyValue).toFixed(2)}</div>
      <div>{item.title}</div>
      <div>Count: {basketGood}</div>
      <button
        type="button"
        onClick={() => {
          dispatch(getItem(item.id))
          dispatch(getHeaderData())
        }}
      >
        Add to Basket
      </button>
    </div>
  )
}

export default Card
