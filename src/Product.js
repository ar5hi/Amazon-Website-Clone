import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider'
import Stars from './Stars';


function Product(props) {

   const [state, dispatch] = useStateValue()

   const addToBasket = () => {
     dispatch({
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
  
    return (
      <div className="product">
        <div className="product__info">
          <p>{props.title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{props.price}</strong>
          </p>
          <div className="product__rating">
            {/* {Array(props.rating)
              .fill()
              .map((_, i) => (
                <StarIcon fontSize="small" style={{ color: '#ff9f00' }} />
              ))} */}
            <Stars rating={props.rating} />
          </div>
        </div>
        <img src={props.image} alt="" />

        <button onClick={addToBasket}>Add to Cart</button>
      </div>
    )
}

export default Product