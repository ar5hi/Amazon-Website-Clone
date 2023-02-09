import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LocationOnIcon from '@mui/icons-material/LocationOnOutlined'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

function Header() {
   const [state, dispatch] = useStateValue()
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="header__logo">
          <img
            className="header__logo1"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </div>
      </Link>
      <div className="header__delivery">
        <div className="header__deliveryLogo">
          <LocationOnIcon />
        </div>
        <div className="header__deliveryText">
          <div className="header__deliveryTextName">
            <h6>Deliver to PQR</h6>
          </div>

          <div className="header__deliveryTextLocation">
            <h4>ABC, XYZ 101010</h4>
          </div>
        </div>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="nav__item">
          <span className="nav__itemLineOne">Returns</span>
          <span className="nav__itemLineTwo">& Orders</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <div className="nav__itemBasket">
            <ShoppingCartIcon />
            <span className="nav__itemLineTwo nav__basketCount">
              {state.totalQty}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
