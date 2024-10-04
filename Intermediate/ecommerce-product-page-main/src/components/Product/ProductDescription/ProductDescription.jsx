import React,{useContext} from 'react'
import {icons,colors} from "../.././../data/projectData";
import { StateContext } from '../../../App';


import './productDescription.css'

const ProductDescription = ({companyName,title,content,price,discount}) => {
  const {iconCart} = icons
  const {Primary,Neutral} = colors
  const {numberItemsToAdd,increaseNumberItems,decreaseNumberItems,setNumberItemsToAdd,setChosenItems,setNotificationItems} = useContext(StateContext);
  return (
    <div className='product-description'>
      <p className='company-name' style={{color:Neutral.DarkGrayishBlue}}> 
        {companyName}
      </p>
      <p className='product-description-title' style={{color:Neutral.Black}}>
          {title}
      </p>
      <p className='product-description-content' style={{color:Neutral.DarkGrayishBlue}}>
        {content}
      </p>
      <div className='price'>
        <div>
          <p className='current-price'  style={{color:Neutral.Black}}>
            {`$${(price - price*discount*0.01).toFixed(2)}`}
          </p>
          <p className='discount' style={{color:Neutral.White,backgroundColor:Neutral.Black}} >
            {`${discount}%`}
          </p>
        </div>
        <del className='perv-price'style={{color:Neutral.DarkGrayishBlue}} >
          {`$${(price).toFixed(2)}`}
        </del>
      </div>
      <div className='order'>
        <div className='order-numbers' style={{backgroundColor:Neutral.LightGrayishBlue,color:Neutral.Black}}>
          <button style={{color:Primary.Orange}} onClick={decreaseNumberItems}>-</button>
          <p>{numberItemsToAdd}</p>
          <button style={{color:Primary.Orange}} onClick={increaseNumberItems}>+</button>
        </div>
        <button className='cart-btn'  onClick={()=>{setChosenItems((prevState)=> (prevState + numberItemsToAdd));setNumberItemsToAdd(0);setNotificationItems((prevState)=>(prevState + numberItemsToAdd))}}>
          <img src={iconCart} alt='iconCart' width={15}/>
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  )
}

export default ProductDescription