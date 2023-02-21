import React from 'react'
import useFetch from '../../hooks/useFetch'
import Card from '../Card/Card'
import './List.scss'

const List = ({ catId, maxPrice, sort, subCats }) => {
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

  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[categories][id]=${catId}${subCats.map(
      item => `&filters[sub_categories][id][$eq]=${item}`
    )}&filters[price][$lte]=${maxPrice}&sort=price:${sort}`
  )

  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&filters[categories][id]=${catId}${subCats.map(
  //     item => `&filters[sub_categories][id][$eq]=${item}`
  //   )}&filters[price][$lte]=${maxPrice}`
  // )

  // console.log(data)

  return (
    <div className='list'>
      {loading
        ? 'Loading...'
        : !data.length
        ? 'No Products found!'
        : data?.map(item => <Card item={item} key={item.id} />)}
    </div>
  )
}

export default List
