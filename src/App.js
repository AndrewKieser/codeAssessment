import './App.css';
import React from 'react';
import Table from './components/table.js'
import NavMenu from './components/navMenu.js'

const App = () => {
	return (
		<div className="table_container">
			<NavMenu />
			<Table />
		</div>
	);
};

export default App;
