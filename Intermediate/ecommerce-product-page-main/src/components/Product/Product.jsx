import React from 'react'

import ProductVeiw from './ProductVeiw/ProductVeiw'
import ProductDescription from './ProductDescription/ProductDescription'

import './product.css'

function Product() {
  return (
    <div className='product'>
      <ProductVeiw/>
      <ProductDescription 
      companyName={'Sneaker Company'} title={'Fall Limited Edition Sneakers'} 
      content={'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.'}
      price = {250}
      discount={50}
      />
    </div>
  )
}

export default Product