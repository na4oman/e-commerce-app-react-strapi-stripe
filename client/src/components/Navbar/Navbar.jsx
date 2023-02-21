import React, { useContext, useState } from 'react'
import './Navbar.scss'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import language from '/images/en.png'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Cart from '../Cart/Cart'
import { CartContext } from '../../context/cartContext'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { cart } = useContext(CartContext)

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
          <div className='language'>
            <img src={language} alt='langugage' />
            <ArrowDropDownIcon className='icon' />
          </div>
          <div className='currency'>
            USD
            <ArrowDropDownIcon className='icon' />
          </div>
          <div className='category'>
            <div className='item'>
              <Link className='link' to='/products/2'>
                Woman
              </Link>
            </div>
            <div className='item'>
              <Link className='link' to='/products/1'>
                Men
              </Link>
            </div>
            <div className='item'>
              <Link className='link' to='/products/4'>
                Kids
              </Link>
            </div>
            <div className='item'>
              <Link className='link' to='/products/3'>
                Accessories
              </Link>
            </div>
          </div>
        </div>
        <div className='center'>
          <Link to='/' className='link'>
            Fashion Store
          </Link>
        </div>
        <div className='right'>
          <div className='item'>
            <Link to='/' className='link'>
              Homepage
            </Link>
          </div>
          <div className='item'>
            <Link to='/' className='link'>
              About
            </Link>
          </div>
          <div className='item'>
            <Link to='/' className='link'>
              Contact
            </Link>
          </div>
          <div className='item'>
            <Link to='/' className='link'>
              Stores
            </Link>
          </div>
          <div className='icons'>
            <SearchIcon className='icon' />
            <PersonOutlineIcon className='icon' />
            <FavoriteBorderIcon className='icon' />
            <div className='cart' onClick={e => setOpen(!open)}>
              <ShoppingCartOutlinedIcon className='icon' />
              <span className='badge'>{cart.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}

export default Navbar
