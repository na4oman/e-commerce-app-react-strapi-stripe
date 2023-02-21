import React, { useContext, useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'

const Product = () => {
  const { id } = useParams()
  const [currentImg, setCurrentImg] = useState('')
  const [qty, setQty] = useState(1)
  const { addToCart } = useContext(CartContext)

  // const images = [
  //   'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //   'https://images.pexels.com/photos/264726/pexels-photo-264726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  // ]

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`)
  // console.log(data)
  // console.log(cart)

  return (
    <div className='product'>
      {error ? (
        'Something went wrong!'
      ) : loading ? (
        'Loading...'
      ) : (
        <>
          <div className='left'>
            <div className='images'>
              <img
                src={
                  import.meta.env.VITE_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=''
                onClick={e => setCurrentImg('img')}
              />
              <img
                src={
                  import.meta.env.VITE_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=''
                onClick={e => setCurrentImg('img2')}
              />
            </div>

            <div className='mainImg'>
              <img
                // src={
                //   import.meta.env.VITE_APP_UPLOAD_URL +
                //   data?.attributes[currentImg]?.data?.attributes?.url
                // }
                src={
                  currentImg
                    ? import.meta.env.VITE_APP_UPLOAD_URL +
                      data?.attributes[currentImg]?.data?.attributes?.url
                    : ''
                }
                alt=''
              />
            </div>
          </div>
          <div className='right'>
            <h1>{data?.attributes?.title}</h1>
            <span className='price'>$ {data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className='quantity'>
              <button
                onClick={e => setQty(prev => (prev === 1 ? 1 : prev - 1))}
              >
                -
              </button>
              {qty}
              <button onClick={e => setQty(prev => prev + 1)}>+</button>
            </div>
            <button className='add' onClick={() => addToCart(data, qty)}>
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className='links'>
              <div className='item'>
                <FavoriteBorderIcon className='icon' /> ADD TO WISH LIST
              </div>
              <div className='item'>
                <BalanceIcon className='icon' /> ADD TO COMPARE
              </div>
            </div>
            <div className='info'>
              <span>VENDOR: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Men, Top</span>
            </div>
            <hr />
            <div className='info'>
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Product
