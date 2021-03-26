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
          <h1 className="text-dark">ONLINE SHOPPING FOR YOU</h1>
        </Link>
      </nav>
      <nav className="navbar navbar-light bg-light my-2 py-3">
        <div className="col-2">
          <Link className="navbar-toggler" style={{ textDecoration: 'none' }} to="/basket">{totalQuantity} items in Cart</Link>
        </div>
        <h4 className="col">
          {(totalPrice * currencyValue).toFixed(1)}
        </h4>
        <div className="col-4">
          <Currencies />
        </div>
        <div className="col-4">
          <Sorting />
        </div>
      </nav>
    </div>
  )
}

export default Header
