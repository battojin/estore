import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './header'
import { getGoods, getRates } from '../redux/reducers/goodsReducer'
import Card from './card'

const Home = () => {
  const dispatch = useDispatch()
  const items = useSelector((store) => store.goodsReducer.goods.slice(0, 30))

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
          return (
            <Card
              key={item.id}
              item={item}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home
