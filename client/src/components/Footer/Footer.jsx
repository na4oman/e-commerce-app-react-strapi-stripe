import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h3>Categories</h3>
          <span>
            <Link to='/' className='link'>
              Women
            </Link>
          </span>
          <span>
            <Link to='/' className='link'>
              Men
            </Link>
          </span>
          <span>
            <Link to='/' className='link'>
              Kids
            </Link>
          </span>
          <span>
            <Link to='/' className='link'>
              Accessories
            </Link>
          </span>
          <span>
            <Link to='/' className='link'>
              Shoes
            </Link>
          </span>
          <span>
            <Link to='/' className='link'>
              New Arrivals
            </Link>
          </span>
        </div>
        <div className='item'>
          <h3>Links</h3>
          <span>
            <Link to='/' className='link'>
              FAQ
            </Link>
          </span>
          <span>
            <Link to='/' className='link'>
              About us
            </Link>
          </span>
          <span>
            <Link to='/' className='link'>
              Pages
            </Link>
          </span>
          <span>
            <Link to='/' className='link'>
              Stores
            </Link>
          </span>
          <span>
            <Link to='/' className='link'>
              Compare
            </Link>
          </span>
          <span>
            <Link to='/' className='link'>
              Cookies
            </Link>
          </span>
        </div>
        <div className='item'>
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            repellat maiores porro sint hic ea aut veritatis, voluptatum alias
            minus illum voluptas nulla sit velit! Vel quisquam atque assumenda
            nemo. Laborum ipsum aspernatur unde eum exercitationem praesentium.
            Laborum ipsum aspernatur unde eum exercitationem praesentium.
          </p>
        </div>
        <div className='item'>
          <h3>Contact</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            repellat maiores porro sint hic ea aut veritatis, voluptatum alias
            minus illum voluptas nulla sit velit! Vel quisquam atque assumenda
            nemo. Laborum ipsum aspernatur unde eum exercitationem praesentium.
            Laborum ipsum aspernatur unde eum exercitationem praesentium.
          </p>
        </div>
      </div>
      <div className='bottom'>
        <div className='copyright'>
          <div className='logo'>
            <Link to='/' className='link'>
              Fashion Store
            </Link>
          </div>
          <span>&copy; Copyright 2023. All Rights Reserved.</span>
        </div>
        <div className='payment'>
          <img src='/images/payment.png' alt='payment' />
        </div>
      </div>
    </div>
  )
}

export default Footer
