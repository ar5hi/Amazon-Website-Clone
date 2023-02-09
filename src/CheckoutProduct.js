import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
import Stars from './Stars'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteIcon from '@mui/icons-material/Delete'

function CheckoutProduct(props) {
    const [state, dispatchadd] = useStateValue()

    const addToBasket = () => {
      dispatchadd({
        type: 'ADD_TO_BASKET',
        item: {
          id: props.id,
          title: props.title,
          image: props.image,
          price: props.price,
          rating: props.rating,
          qty: props.qty,
        },
      })
    }
  const [basket , dispatchremove] = useStateValue()

  const removeFromBasket = () => {
    dispatchremove({
      type: 'REMOVE_FROM_BASKET',
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
        qty: props.qty,
      },
    })
  }

  const [cart, dispatchdelete] = useStateValue()

  const deleteFromBasket = () => {
    dispatchdelete({
      type: 'DELETE_FROM_BASKET',
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
        qty: props.qty,
      },
    })
  }


  return (
    <div className="checkoutProduct">
      <img src={props.image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props.title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          <Stars rating={props.rating} />
        </div>
        <button className="button_actions addsub1" onClick={removeFromBasket}>
          {/* <RemoveIcon fontSize="small" /> */}-
        </button>
        <span><strong>{props.qty}</strong></span>

        <button className="button_actions addsub2" onClick={addToBasket}>
          {/* <AddIcon fontSize="small" /> */}+
        </button>
        <div>
          <div>
            {/* <button className="button_actions">Buy Now</button> */}
            <button className="button_actions" onClick={deleteFromBasket}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct
