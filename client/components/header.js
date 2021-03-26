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
      <nav className="nav my-3 justify-content-center">
        <Link style={{ textDecoration: 'none' }} to="/">
          <h1>The Stuff You Will Never Need Store</h1>
        </Link>
      </nav>
      <nav className="navbar navbar-light bg-light my-2 py-3">
        <div className="container-fluid">
          <Link className="navbar-toggler" style={{ textDecoration: 'none' }} to="/basket">{totalQuantity} items in Cart</Link>
          {(totalPrice * currencyValue).toFixed(2)}
          <Currencies />
          <Sorting />
        </div>
      </nav>
    </div>
  )
}

export default Header
