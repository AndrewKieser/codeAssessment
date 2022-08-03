import React from "react";

const TableBody = ({ tableData, columns }) => {
	return (
		<tbody>
			{tableData.map((data) => {
				return (
					<tr key={data.id}>
						{columns.map(({ accessor }) => {
							const tData = data[accessor] ? data[accessor] : "——";
							if (accessor === "price"||accessor === "mktcap"||accessor === "dividend") {
								if( data[accessor]) {
									return <td key={accessor}>${tData}</td>;
								} else {
									return <td key={accessor}>{tData}</td>;
								}
							} else {
								return <td key={accessor}>{tData}</td>;
							}
						})}
					</tr>
				);
			})}
		</tbody>
	);
};
   
export default TableBody;