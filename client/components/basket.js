import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './header'
import { removeItem, getHeaderData } from '../redux/reducers/basketReducer'

const Basket = () => {
  const dispatch = useDispatch()
  const goods = useSelector((store) => store.goodsReducer.goods)
  const basketList = useSelector((store) => store.basketReducer.list)
  const currencyValue = useSelector((store) => store.goodsReducer.currencyValue)
  const idList = basketList.map((item) => item.id)
  const basketGoods = goods.filter((item) => idList.indexOf(item.id) !== -1)
  const basketPrice = useSelector((store) => store.basketReducer.totalPrice)
  const basketSum = useSelector((store) => store.basketReducer.totalQuantity)

  return (
    <div>
      <Header />
      {basketGoods.map((item) => {
        const { quantity } = basketList.find((good) => good.id === item.id)
        return (
          <div key={item.id}>
            {item.title} {(item.price * currencyValue * quantity).toFixed(2)} {quantity}
            <button
              type="button"
              onClick={() => {
                dispatch(removeItem(item.id))
                dispatch(getHeaderData())
              }}
            >
              Delete
            </button>
          </div>
        )
      })}
      <div>{basketPrice}</div>
      <div>{basketSum}</div>
    </div>
  )
}

export default Basket
