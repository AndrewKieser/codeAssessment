import React from "react";
import MenuItems from "./Menuitems";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
	depthLevel = depthLevel + 1;
	return (
		<ul className={`dropdown ${dropdown ? "show" : " "}`}>
			{submenus.map((submenu, index) => (
				<MenuItems items={submenu} key={index} />
			))}
		</ul>
	);
};

export default Dropdown;