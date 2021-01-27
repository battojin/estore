import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Currencies from './currencies'
import Sorting from './sorting'

const Header = () => {
  const totalPrice = useSelector((store) => store.basketReducer.totalPrice)
  const currencyValue = useSelector((store) => store.goodsReducer.currencyValue)
  const totalQuantity = useSelector((store) => store.basketReducer.totalQuantity)

  return (
    <div>
      <Link to="/">
        <h1>E-Store for Miscellaneous Stuff</h1>
      </Link>
      <div>
        <Link to="/basket">{totalQuantity}</Link>
        <Currencies />
        <Sorting />
        {(totalPrice * currencyValue).toFixed(2)}
      </div>
    </div>
  )
}

export default Header
