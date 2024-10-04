import React,{useContext} from 'react'

import {icons,colors} from "../../data/projectData";
import avatar from "../../data/images/image-avatar.png";
import NavPages from './NavPages';
import Cart from '../Cart';

import { StateContext } from '../../App';
import "./navbar.css"




const Navbar= ()=> {
  const {iconCart,logoIcon,iconMenu} = icons
  const {Primary,Neutral} = colors
  const {screenSize,showMenuIcon,setActiveMenu,activeMenu,numberItemsToAdd,chosenItems,notificationItems,setNotificationItems,notificationClicked,setNotificationClicked} = useContext(StateContext);
  
    return (
    <div className="navbar">
      <div className='nav-details'>
        <div>{showMenuIcon && !activeMenu ?
          <button onClick={() => {setActiveMenu(true);setNotificationClicked(false)}}>
            <img src ={iconMenu}  alt="icon-Menu"/>
          </button>
          :""}
        </div>
        <div className="logo-icon" >
          <img src={logoIcon} width={100} alt="logo" />
        </div> 
        {showMenuIcon?"":<NavPages/>}
      </div>
      <div className='user-info'> 
        <div className="cart-icon">
          {notificationItems > 0 && !notificationClicked ? <div className='notifications' style={{backgroundColor:Primary.Orange,color:Neutral.White}}>{notificationItems}</div>:''}
          <button>
            <img src={iconCart} width={16} alt="cart" onClick={()=>{setNotificationClicked((prevState)=>(!prevState));setNotificationItems(0);setActiveMenu(false)}}/>
          </button>
        </div>
        <div className="user-avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className='cart-wrapper'>
          {notificationClicked?<Cart price={250} item={chosenItems}/>:""}
        </div>
      </div>
    </div>
  )
}

export default Navbar