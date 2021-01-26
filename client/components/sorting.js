import React from 'react'
import { useDispatch } from 'react-redux'
import { sortbyPrice, sortbyName } from '../redux/reducers/goodsReducer'

const Sorting = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button type="button" onClick={() => dispatch(sortbyPrice('L-H'))}>
        Low-High
      </button>
      <button type="button" onClick={() => dispatch(sortbyPrice('H-L'))}>
        High-Low
      </button>
      <button type="button" onClick={() => dispatch(sortbyName('A-Z'))}>
        A-Z
      </button>
      <button type="button" onClick={() => dispatch(sortbyName('Z-A'))}>
        Z-A
      </button>
    </div>
  )
}

export default Sorting
