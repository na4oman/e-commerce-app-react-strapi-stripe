import React, { useContext } from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { CartContext } from '../../context/cartContext'
import { loadStripe } from '@stripe/stripe-js'
import { makeRequest } from '../../makeRequest'

const Cart = () => {
  const { cart, deleteItem, resetCart } = useContext(CartContext)

  // const data = [
  //   {
  //     id: 1,
  //     img: 'https://images.pexels.com/photos/7751714/pexels-photo-7751714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     title: "Victoria's Secret Perfume 250ml Bottle",
  //     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     price: 12.99,
  //     quantity: 2,
  //   },
  //   {
  //     id: 2,
  //     img: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     title: 'Selective White Button-up Collared Top',
  //     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //     price: 16.99,
  //     quantity: 6,
  //   },
  // ]

  const stripePromise = loadStripe('pk_test_3DM1iUp61q8TiysbFIvdbFN300q0BX5R75')

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise
      const res = await makeRequest.post('/orders', {
        products: cart,
      })
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='shopping-cart'>
      <h2>Products in your cart</h2>
      {cart.map(item => (
        <div className='item' key={item.id}>
          <div className='img'>
            <img
              src={
                import.meta.env.VITE_APP_UPLOAD_URL +
                item.attributes.img.data.attributes.url
              }
              alt=''
            />
          </div>
          <div className='content'>
            <h3>{item.attributes.title}</h3>
            <p>{item.attributes.desc.substring(0, 100)}</p>
            <div className='price'>
              <span>
                {item.attributes.qty} x ${item.attributes.price}
              </span>
            </div>
          </div>
          <div className='delete' onClick={() => deleteItem(item)}>
            <DeleteOutlinedIcon />
          </div>
        </div>
      ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>
          ${' '}
          {cart
            .reduce(
              (acc, cur) => acc + cur.attributes.qty * cur.attributes.price,
              0
            )
            .toFixed(2)}
        </span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <div className='reset'>
        <span onClick={() => resetCart()}>Reset cart</span>
      </div>
    </div>
  )
}

export default Cart
