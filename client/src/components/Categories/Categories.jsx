import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.scss'

const Categories = () => {
  return (
    <div className='categories'>
      <div className='col'>
        <div className='row'>
          <div className='image'>
            <img
              src='https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
            />
            <button>
              <Link className='link' to='/products/3'>
                Accessories
              </Link>
            </button>
          </div>
        </div>
        <div className='row'>
          <div className='image'>
            <img
              src='https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
              className='image'
            />
            <button>
              <Link className='link' to='/products/5'>
                Sales
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <div className='image'>
            <img
              src='https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
            />
            <button>
              <Link className='link' to='/products/2'>
                Women
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className='col col-2'>
        <div className='row'>
          <div className='col'>
            <div className='image'>
              <img
                src='https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
                className='image'
              />
              <button>
                <Link className='link' to='/products/6'>
                  New Season
                </Link>
              </button>
            </div>
          </div>
          <div className='col'>
            <div className='image'>
              <img
                src='https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
                className='image'
              />
              <button>
                <Link className='link' to='/products/7'>
                  Shoes
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='image'>
            <img
              src='https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
              className='image'
            />
            <button>
              <Link className='link' to='/products/1'>
                Men
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
