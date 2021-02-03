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
    <header>
      <Link style={{ textDecoration: 'none' }} to="/">
        <h1>The Stuff You Will Never Need Store</h1>
      </Link>
      <div>
        <Link style={{ textDecoration: 'none' }} to="/basket">{totalQuantity}</Link> items
        <Currencies />
        <Sorting />
        {(totalPrice * currencyValue).toFixed(2)}
      </div>
    </header>
  )
}

export default Header
