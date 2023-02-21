import { CleaningServices } from '@mui/icons-material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import useFetch from '../../hooks/useFetch'
import './Products.scss'

const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState('asc')
  const [selectedSubCats, setSelectedSubCats] = useState([])

  // Fetching sub-categories
  const { data, loading, error } = useFetch(
    `/sub-categories?filters[categories][id][$eq]=${catId}`
  )

  const handleChange = e => {
    const value = e.target.value
    const isChecked = e.target.checked

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter(item => item !== value)
    )
  }

  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>Product Categories</h2>
          {data?.map(cat => (
            <div className='inputItem' key={cat.id}>
              <input
                type='checkbox'
                value={cat.id}
                id={cat.id}
                onChange={handleChange}
              />
              <label htmlFor={cat.id}>{cat.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className='filterItem'>
          <h2>Filter by price</h2>
          <div className='inputItem'>
            <span>0</span>
            <input
              type='range'
              name=''
              id=''
              min={0}
              max={1000}
              onChange={e => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItem'>
          <h2>Sort by</h2>
          <div className='inputItem'>
            <input
              type='radio'
              name='price'
              id='asc'
              value='asc'
              onChange={e => setSort('asc')}
            />
            <label htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className='inputItem'>
            <input
              type='radio'
              name='price'
              id='desc'
              value='desc'
              onChange={e => setSort('desc')}
            />
            <label htmlFor='desc'>Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img
          src='https://images.pexels.com/photos/354103/pexels-photo-354103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  )
}

export default Products
