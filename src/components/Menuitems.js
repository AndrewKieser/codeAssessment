import React from "react";
import Dropdown from "./Dropdown";
import { useState, useEffect, useRef } from "react";

export const menuItems = [
	{
		title: "Home"
	}
	, {
		title: "About"
		, submenu: [
			{
				title: "Read AAII's unique story"
			}
			, {
				title: "Learn the Benefits of AAII Membership"
			}
		]
	}
	, {
		title: "Planning"
		, submenu: [
			{
				title: "About the Individual Investor Wealth-Building Process"
			}
			, {
				title: "Individual Investor Wealth Building Process Flowchart"
			}
			, {
				title: "A Lifetime Investment Strategy"
			}
			, {
				title: "Investor Classrooms"
			}
			, {
				title: "Tax Strategies"
			}
			, {
				title: "Asset Allocation"
			}
			, {
				title: "Savings Products"
			}
		]
	}
	, {
		title: "AAII Journal"
		, submenu: [
			{
				title: "Solid Long-Term Results From the Weiss Blue-Chip Dividend Screen"
			}
			, {
				title: "July 2022 Issue"
			}
			, {
				title: "Best of the AAII Journal"
			}
			, {
				title: "Article Index"
			}
			, {
				title: "Investor Guides"
			}
		]
	}
	, {
		title: "Markets"
	}
	, {
		title: "Model Portfolios"
	}
	, {
		title: "Investing Ideas"
	}
	, {
		title: "Screening"
	}
	, {
		title: "Community"
	}
	, {
		title: "Education"
	}
	, {
		title: "A+ Investor"
	}
];

const MenuItems = ({ items, depthLevel }) => {
	const [dropdown, setDropdown] = useState(false);
	let ref = useRef();
	useEffect(() => {
		const handler = (event) => {
			if (dropdown && ref.current && !ref.current.contains(event.target)) {
				setDropdown(false);
			}
		};
		document.addEventListener("mousedown", handler);
		document.addEventListener("touchstart", handler);
		return () => {
			// Cleanup the event listener
			document.removeEventListener("mousedown", handler);
			document.removeEventListener("touchstart", handler);
		};
	}, [dropdown]);
	return (
		<li className="menu-items" ref={ref}>
			{items.submenu ? (
				<>
					<button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
						{items.title}{" "}
						{depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
					</button>
					<Dropdown submenus={items.submenu} dropdown={dropdown} />
				</>
			) : (
				<a href="/#">{items.title}</a>
			)}
		</li>
	);
};

export default MenuItems;