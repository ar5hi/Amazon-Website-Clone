export const initialState = {
  basket: [],
  totalAmount: 0,
  totalQty: 0,
}

const reducer = (state, action) => {
  if (action.type === 'ADD_TO_BASKET') {
    const totalQty = state.basket
      .map((obj) => obj.qty)
      .reduce((acc, val) => acc + val, 1)

    const updatedTotalAmount = parseFloat(
      (state.totalAmount + action.item.price).toFixed(2)
    )
    // const updatedTotalAmount = state.totalAmount + action.item.price

    const existingCartItemIndex = state.basket.findIndex(
      (it) => it.id === action.item.id
    )
    console.log(existingCartItemIndex)
    const existingCartItem = state.basket[existingCartItemIndex]

    let updatedItems

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        qty: existingCartItem.qty + 1,
      }

      updatedItems = [...state.basket]
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      updatedItems = state.basket.concat(action.item)
    }

    return {
      basket: updatedItems,
      totalAmount: updatedTotalAmount,
      totalQty: totalQty,
    }
  }

  if (action.type === 'REMOVE_FROM_BASKET') {
    const totalQty =
      state.basket.map((obj) => obj.qty).reduce((acc, val) => acc + val, 0) - 1

    const existingCartItemIndex = state.basket.findIndex(
      (it) => it.id === action.item.id
    )
    const existingItem = state.basket[existingCartItemIndex]
    const updatedTotalAmount = parseFloat(
      (state.totalAmount - existingItem.price).toFixed(2)
    )

    let updatedItems
    if (existingItem.qty === 1) {
      updatedItems = state.basket.filter((item) => item.id !== action.item.id)
    } else {
      const updatedItem = { ...existingItem, qty: existingItem.qty - 1 }
      updatedItems = [...state.basket]
      updatedItems[existingCartItemIndex] = updatedItem
    }

    return {
      basket: updatedItems,
      totalAmount: updatedTotalAmount,
      totalQty: totalQty,
    }
  }

  if (action.type === 'DELETE_FROM_BASKET') {
    const totalQty =
      state.basket.map((obj) => obj.qty).reduce((acc, val) => acc + val, 0) -
      action.item.qty

    const updatedTotalAmount = parseFloat(
      (state.totalAmount - action.item.price * action.item.qty).toFixed(2)
    )

    let updatedItems = state.basket.filter((item) => item.id !== action.item.id)

    return {
      basket: updatedItems,
      totalAmount: updatedTotalAmount,
      totalQty: totalQty,
    }
  } else return state
}

export default reducer
