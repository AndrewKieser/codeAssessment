import { useState } from "react";
import React from "react";



const TableHead = ({ columns, handleSorting }) => {
	const [sortField, setSortField] = useState("");
	const [order, setOrder] = useState("asc");

	const handleSortingChange = (accessor) => {
		const sortOrder = accessor === sortField && order === "asc" ? "desc" : "asc";
		setSortField(accessor);
		setOrder(sortOrder);
		handleSorting(accessor, sortOrder);
	};
	
	return (
		<thead>
			<tr>
				{columns.map(({ label, accessor, sortable, priority }) => {
					const cl = sortable
					? sortField === accessor && order === "asc"
					 ? "up"
					 : sortField === accessor && order === "desc"
					 ? "down"
					 : "default"
					: "";
					return (
						<th class={priority} className={cl} key={accessor} onClick={() => handleSortingChange(accessor)}>
							{label}
						</th>
					)
				})}
			</tr>
		</thead>
	);
};
   
export default TableHead;