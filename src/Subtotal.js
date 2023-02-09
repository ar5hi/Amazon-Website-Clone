import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
// import { initialState } from './reducer'

function Subtotal() {
  const [state, dispatch] = useStateValue()
  return (
    <div className="subtotal">
      
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({state.totalQty} items):
              <strong>${value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={state.totalAmount}
        displayType={'text'}
        thousandSeparator={true}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
