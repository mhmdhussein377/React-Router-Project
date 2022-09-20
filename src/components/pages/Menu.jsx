import React from 'react';
import {MenuList} from "../helpers/MenuList"
import MenuItem from '../MenuItem';
import "../styles/menu.css"

const Menu = () => {
  return (
    <div className="menu">
        <div className="menuTitle">Our Menu</div>
        <div className="menuList">
            {MenuList.map((menu,index) => <MenuItem key={index} menu={menu}/>)}
        </div>
    </div>
  )
}

export default Menu