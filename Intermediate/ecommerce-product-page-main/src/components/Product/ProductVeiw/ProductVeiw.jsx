import React, { useState,useContext } from 'react';
import {images,imagesThum,icons} from '../../../data/projectData';

import { StateContext } from '../../../App.js';

import './productView.css'

const ProductVeiw = () => {
    const {screenSize,setModalOpened}=useContext(StateContext)
    const {iconNext,iconPrevious}=icons
    const [index, setIndex] = useState(0); 
    const length = images.length;

    const handlePrevious = (id) => {
        const newIndex = id - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };
    const handleNext = (id) => {
        const newIndex = id + 1;
        setIndex(newIndex > length - 1 ? 0 : newIndex);
    };
  return (
    <div className='product-veiw'>
        {screenSize>776?
        <div className='product-veiw-lg'>
            <div className='main-image'>
                <img src={images[0].src} alt={images[0].alt} loading='lazy' onClick={()=>setModalOpened(true)} width={350}/>
            </div>
            <div className='thumbnails'>
                {imagesThum.map(({id,src,alt}) =>(
                    <div className={id===1?'active':'' } key={id} onClick={()=>setModalOpened(true)}>
                        <img src={src} alt={alt} loading='lazy' width={70}/>
                    </div>   
                ))}
            </div>
        </div>:
        <div className='product-veiw-sm'>
            <div className='slider-container'>
                <img src={images[index].src} alt={images[index].alt} id={images[index].id} width={300}/>
                <div className='slider'>
                    <button className='pervious button' onClick={()=>handlePrevious(images[index].id)}>
                        {<img src={iconPrevious} alt='iconPrevious' loading='lazy' width={10} />}
                    </button>
                    <button className='next button' onClick={()=>handleNext(images[index].id)}>
                        {<img src={iconNext} alt='iconNext' loading='lazy' width={10} />}
                    </button>
                </div>
            </div>
        </div>}
    </div>
    
  )
}

export default ProductVeiw