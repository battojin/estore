import React from 'react'
import { useDispatch } from 'react-redux'
import { sortbyPrice, sortbyName } from '../redux/reducers/goodsReducer'

const Sorting = () => {
  const dispatch = useDispatch()
  return (
    <div>
      Sort by:
      <div className="btn-group ml-1">
        <button type="button" className="btn btn-outline-dark" onClick={() => dispatch(sortbyPrice('L-H'))}>
          Low Price
        </button>
        <button type="button" className="btn btn-outline-dark" onClick={() => dispatch(sortbyPrice('H-L'))}>
          High Price
        </button>
        <button type="button" className="btn btn-outline-dark" onClick={() => dispatch(sortbyName('A-Z'))}>
          A-Z
        </button>
        <button type="button" className="btn btn-outline-dark" onClick={() => dispatch(sortbyName('Z-A'))}>
          Z-A
        </button>
      </div>
    </div>

  )
}

export default Sorting
