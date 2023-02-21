import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ item }) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
      <div className='card'>
        <div className='image'>
          <img
            src={
              import.meta.env.VITE_APP_UPLOAD_URL +
              item?.attributes?.img?.data?.attributes?.url
            }
            alt=''
            className='mainImg'
          />
          <img
            src={
              import.meta.env.VITE_APP_UPLOAD_URL +
              item?.attributes?.img2?.data?.attributes?.url
            }
            alt=''
            className='secondImg'
          />
        </div>
        <div className='content'>
          <h3>{item?.attributes.title}</h3>
          <div className='prices'>
            <span>${item?.attributes.oldPrice}</span>
            <span>${item?.attributes.price}</span>
          </div>
        </div>
        {item?.attributes.isNew && <span className='new'>New Season</span>}
      </div>
    </Link>
  )
}

export default Card
