import { useState } from "react";
import React from "react";
import tableData1 from "../json/stocks.json";
import TableBody from "./tableBody.js";
import TableHead from "./tableHead.js";

const Table = () => {
	const [tableData, setTableData] = useState(tableData1);

	const columns = [
		{ label: "ID", accessor: "id", sortable: true, priority: "one" }
		, { label: "Company ID", accessor: "companyId", sortable: true, priority: "one" }
		, { label: "Sipro ID", accessor: "siproId", sortable: true, priority: "one" }
		, { label: "Ticker", accessor: "ticker", sortable: true, priority: "one" }
		, { label: "Company", accessor: "company", sortable: true, priority: "one" }
		, { label: "Sector", accessor: "sector", sortable: true, priority: "one" }
		, { label: "Industry", accessor: "industry", sortable: true, priority: "one" }
		, { label: "Price", accessor: "price", sortable: true, priority: "one" }
		, { label: "Volume Avg.", accessor: "volumeAvg", sortable: true, priority: "one" }
		, { label: "Market Cap", accessor: "mktcap", sortable: true, priority: "one" }
		, { label: "Dividend", accessor: "dividend", sortable: true, priority: "one" }
		, { label: "Exchange", accessor: "exchange", sortable: true, priority: "one" }
		, { label: "ADR", accessor: "adr", sortable: true }
	];

	const handleSorting = (sortField, sortOrder) => {
		if (sortField) {
			const sorted = [...tableData].sort((a, b) => {
				if (a[sortField] === null) return 1;
				if (b[sortField] === null) return -1;
				if (a[sortField] === null && b[sortField] === null) return 0;
				return (
					a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
						numeric: true,
					}) * (sortOrder === "asc" ? 1 : -1)
				);
			});
			setTableData(sorted);
		}
	};

	return (
		<>
			<table className="table">
				<caption>
					Click a column header to sort.
				</caption>
	    		<TableHead {...{columns, handleSorting}} />
	    		<TableBody {...{columns, tableData}} />
			</table>
		</>
	);
};

export default Table;