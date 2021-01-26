import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Currencies from './currencies'
import Sorting from './sorting'

const Header = () => {
  const currencyValue = useSelector((store) => store.goodsReducer.currencyValue)

  return (
    <div>
      <Link to="/">
        <h1>E-Store for Miscellaneous Stuff</h1>
      </Link>
      <p>
        {/* <Link to="/basket">{totalQuantity}</Link> */}
        <Currencies />
        <Sorting />
        {(currencyValue).toFixed(2)}
      </p>
    </div>
  )
}

export default Header
