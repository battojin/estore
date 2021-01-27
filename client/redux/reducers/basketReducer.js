const GET_ITEM = 'GET_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const GET_TOTAL_PRICE = 'GET_TOTAL_PRICE'

const initialState = {
  list: [],
  totalPrice: 0,
  totalQuantity: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM: {
      return {
        ...state,
        list: action.payload.list,
        itemName: action.payload.itemName
      }
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        list: action.payload.list
      }
    }
    case GET_TOTAL_PRICE: {
      return {
        ...state,
        totalPrice: action.payload.totalPrice,
        totalQuantity: action.payload.totalQuantity
      }
    }
    default: {
      return state
    }
  }
}

export const getItem = (id, number = 1) => {
  return (dispatch, getState) => {
    const store = getState()
    const { goods } = store.goodsReducer
    const { list } = store.basketReducer

    const selectedItem = goods.find((item) => item.id === id)
    let elementFound = false
    let newList = list.reduce((acc, rec) => {
      if (rec.id === id) {
        elementFound = true
        const itemQuantity = Math.max(rec.quantity + number, 0)
        if (itemQuantity > 0) {
          return [...acc, { id: rec.id, quantity: itemQuantity }]
        }
        return [...acc]
      }
      return [...acc, rec]
    }, [])
    if (!elementFound) {
      newList = [...newList, { id, quantity: 1 }]
    }

    dispatch({
      type: GET_ITEM,
      payload: {
        list: newList,
        itemName: selectedItem.title
      }
    })
  }
}

export const removeItem = (id, number = 1) => {
  return (dispatch, getState) => {
    const store = getState()
    const { list } = store.basketReducer
    const newList = list.reduce((acc, rec) => {
      if (rec.id === id) {
        const itemQuantity = Math.max(rec.quantity - number, 0)
        if (itemQuantity > 0) {
          return [...acc, { id: rec.id, quantity: itemQuantity }]
        }
        return [...acc]
      }
      return [...acc, rec]
    }, [])

    dispatch({
      type: REMOVE_ITEM,
      payload: {
        list: newList
      }
    })
  }
}

export const getHeaderData = () => {
  return (dispatch, getState) => {
    const store = getState()
    const { goods } = store.goodsReducer
    const { list } = store.basketReducer
    const idList = list.map((item) => item.id)
    const basketGoods = goods.filter((item) => idList.indexOf(item.id) !== -1)
    const basketPrice = (
      list.reduce((acc, rec) => {
        const itemPrice = basketGoods.find((item) => item.id === rec.id).price * rec.quantity
        return acc + itemPrice
      }, 0) * 1
    ).toFixed(2)

    const basketSum = list.reduce((acc, rec) => {
      const combinedQuantity = rec.quantity + acc
      return combinedQuantity
    }, 0)

    dispatch({
      type: GET_TOTAL_PRICE,
      payload: {
        totalPrice: basketPrice,
        totalQuantity: basketSum
      }
    })
  }
}
