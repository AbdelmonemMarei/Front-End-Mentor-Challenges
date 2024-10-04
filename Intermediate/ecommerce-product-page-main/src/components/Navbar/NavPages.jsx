import React from 'react';
import {sidebarData} from '../../data/projectData';

import "./navbar.css"
import { colors } from '../../data/projectData';



const NavPages= ()=> {
    return (
    <div className="nav-pages">
        {sidebarData.map((el,i)=><p className={`category${i+1}`}key={i}>{el}</p>)}
    </div>
    )
}

export default NavPages