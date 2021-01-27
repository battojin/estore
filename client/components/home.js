import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './header'
import { getGoods, getRates } from '../redux/reducers/goodsReducer'
import Card from './card'

const Home = () => {
  const dispatch = useDispatch()
  const items = useSelector((store) => store.goodsReducer.goods.slice(0, 30))
  const currencyValue = useSelector((store) => store.goodsReducer.currencyValue)
  const basketList = useSelector((store) => store.basketReducer.list)

  useEffect(() => {
    dispatch(getRates())
  }, [dispatch])
  useEffect(() => {
    dispatch(getGoods())
  }, [dispatch])

  return (
    <div>
      <Header />
      <div className="item">
        {items.map((item) => {
          const basketGood = basketList.find((good) => good.id === item.id)
          return (
            <Card
              key={item.id}
              item={item}
              currencyValue={currencyValue}
              basketGood={basketGood?.quantity}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home
