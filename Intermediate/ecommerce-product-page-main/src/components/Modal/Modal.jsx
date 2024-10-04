import { useState,useContext } from 'react';
import './modal.css'
import { StateContext } from '../../App';


import { icons,images,imagesThum } from '../../data/projectData'
const Modal = () => {
    const {iconClose,iconPrevious,iconNext} = icons
    const {screenSize,modalOpened,setModalOpened} = useContext(StateContext)
    const [index,setIndex]= useState(0);
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
    <>
      {modalOpened && screenSize >776?      
        <div className='modal'>
            <div className='modal-container'>
                <button className='close-icon' onClick={()=>{setModalOpened(false);setIndex(0)}}>
                    <img src={iconClose} alt='deleteIcon' width={15}/>
                </button>
                <div className='perveiw-image'>
                    <img src={images[index].src} alt={images[index].alt}/>
                    <div className='slider'>
                        <button className='pervious button' onClick={()=>handlePrevious(images[index].id)}>
                            {<img src={iconPrevious} alt='iconPrevious' width={12}/>}
                        </button>
                        <button className='next button' onClick={()=>handleNext(images[index].id)}>
                            {<img src={iconNext} alt='iconNext' width={12}/>}
                        </button>
                    </div>
                </div>
                <div className='thumbnail-images'>
                    {imagesThum.map((el,i)=><div className={`thumImage ${i} ${i===index?'active':''}`}  key={i} onClick={()=>setIndex(i)}><img src={el.src} alt={el.alt} /></div>)}
                </div>
            </div>
        </div>
        :null
        }
    </>
  )
}

export default Modal