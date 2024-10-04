import React,{useContext} from 'react'
import productOneThum from '../data/images/image-product-1-thumbnail.jpg';
import {icons} from '../data/projectData';

import { StateContext } from '../App';

function Cart({price,item}) {
  const {iconCart,iconDelete} = icons
  const {setChosenItems} = useContext(StateContext)
  return (
    <div className='cart'>
      <p className='cart-title'>
        Cart
      </p>
      {item >0?
        <div className='cart-full'>
          <div className='cart-content'>
            <img src={productOneThum} alt='productImage' width={35}/>
            <div className='overview'>
              <p>
              {
                  `Fall Limited Edition Sneakers
                  $${price} x ${item} `
              }
              {<span>${(price*item).toFixed(2)}</span>}
              </p>
              <button className='delete-icon'>
                {<img src={iconDelete} alt='iconDelete' onClick={()=>setChosenItems(0)} width={10}/>}
              </button>
            </div>
          </div>
          <button src={iconCart} className='checkout-btn' >
              checkout
          </button>
        </div>:
        <div className='cart-empty'>
            <p>Your cart is empty.</p>
        </div>
      }
    </div>
  )
}

export default Cart