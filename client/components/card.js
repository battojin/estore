import React from 'react'

const Card = ({ item, currencyValue }) => {
  return (
    <div>
      <img alt="item" src={item.image} />
      <div>{(item.price * currencyValue).toFixed(2)}</div>
      <div>{item.title}</div>
    </div>
  )
}

export default Card
