import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'
import axios from 'axios'
import useFetch from '../../hooks/useFetch'

const FeaturedProducts = ({ type }) => {
  // const data = [
  //   {
  //     id: 1,
  //     img: 'https://images.pexels.com/photos/7751714/pexels-photo-7751714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     img2: 'https://images.pexels.com/photos/949590/pexels-photo-949590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     title: "Victoria's Secret Perfume 250ml Bottle",
  //     isNew: true,
  //     oldPrice: 19.99,
  //     newPrice: 12.99,
  //   },
  //   {
  //     id: 2,
  //     img: 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     img2: 'https://images.pexels.com/photos/264726/pexels-photo-264726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     title: 'Selective White Button-up Collared Top',
  //     isNew: true,
  //     oldPrice: 29.99,
  //     newPrice: 16.99,
  //   },
  //   {
  //     id: 3,
  //     img: 'https://images.pexels.com/photos/157888/fashion-glasses-go-pro-female-157888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     img2: 'https://images.pexels.com/photos/211280/pexels-photo-211280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     title: 'Brown Leather Crossbody Bag With Eyeglasses',
  //     isNew: false,
  //     oldPrice: 22.49,
  //     newPrice: 14.49,
  //   },
  //   {
  //     id: 4,
  //     img: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     img2: 'https://images.pexels.com/photos/3542992/pexels-photo-3542992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  //     title: "Women's Black Long-sleeved Shirt With White Polka Dots",
  //     isNew: false,
  //     oldPrice: 9.99,
  //     newPrice: 6.99,
  //   },
  // ]

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const fetchedData = await axios.get(
  //         import.meta.env.VITE_API_URL +
  //           `/products?populate=*&filters[type][$eq]=${type}`,
  //         {
  //           headers: {
  //             Authorization: 'bearer ' + import.meta.env.VITE_API_TOKEN,
  //           },
  //         }
  //       )

  //       setData(fetchedData.data.data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  //   fetchData()
  // }, [])

  // console.log(data)

  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[type][$eq]=${type}`
  )

  return (
    <div className='featured-products'>
      <div className='top'>
        <h2>{type} products</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
          quisquam, rerum porro quasi magnam culpa eaque voluptatum voluptas
          vel. Laborum eos maxime illo accusamus sint nulla, iure deleniti
          fugiat veniam? Culpa error porro consectetur deleniti dignissimos
          eligendi laudantium alias pariatur. Iste praesentium assumenda
          expedita.
        </p>
      </div>
      <div className='bottom'>
        {error
          ? 'Something went wrong!'
          : loading
          ? 'Loading...'
          : data?.map(item => <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default FeaturedProducts
