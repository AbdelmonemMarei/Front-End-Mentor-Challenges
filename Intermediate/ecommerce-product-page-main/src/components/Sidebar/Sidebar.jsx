import React,{useContext} from 'react'
import { StateContext } from '../../App';
import "./sidebar.css"
import {icons,sidebarData} from '../../data/projectData';


const Sidebar = () => {
  const {iconClose} = icons
  const {showMenuIcon,activeMenu,setActiveMenu} = useContext(StateContext);
  return (
    <div className={`sidebar ${activeMenu?"active":''}`}>
      {activeMenu && showMenuIcon?
      <div className='sidebar-menu'>
          <button onClick={() => setActiveMenu(false)}>
            <img src={iconClose} alt='iconDelete'/>
          </button>
          <div className='links'>
            {sidebarData.map((el,i)=><p className={`category${i+1}`} key={i}>{el}</p>)}
          </div>
      </div>:""}
    </div>
  )
}

export default Sidebar