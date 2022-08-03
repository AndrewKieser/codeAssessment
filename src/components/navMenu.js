import React from 'react';
import {menuItems} from './Menuitems.js'
import MenuItems from './Menuitems.js'

const NavMenu = () => {
	return (
		<nav>
			<ul className="menus">
				{menuItems.map((menu, index) => {
					const depthLevel = 0;
					return (<MenuItems items={menu} key={index} depthLevel={depthLevel} />);
				})}
			</ul>
		</nav>
	);
};
   
export default NavMenu;