import React, { useState } from 'react'
import './Slider.scss'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/7405392/pexels-photo-7405392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ]

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : prev => prev - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : prev => prev + 1)
  }

  return (
    <div className='slider'>
      <div
        className='container'
        style={{ transform: `translateX(-${currentSlide * 50}rem)` }}
      >
        {data.map(el => (
          <img src={el} key={el} alt={el} />
        ))}
        {/* <img src={data[1]} alt='' />
        <img src={data[2]} alt='' />
        <img src={data[3]} alt='' />
        <img src={data[4]} alt='' /> */}
      </div>
      <div className='icons'>
        <div className='icon' onClick={prevSlide}>
          <ArrowBackIosNewOutlinedIcon />
        </div>
        <div className='icon' onClick={nextSlide}>
          <ArrowForwardIosOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider
