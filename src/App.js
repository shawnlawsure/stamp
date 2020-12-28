import React from 'react';
import './App.css';

import {Route, NavLink, HashRouter} from "react-router-dom";

import Home from './components/Home'
import EditStamp from './store/containers/edit_stamp.js';
import List from './store/containers/list.js';

function App() {
  return (
	<HashRouter>
	<div className="App">
		<div className="header">
			<NavLink to="/">
				<h1>My Stamp Catalog</h1>
			</NavLink>
			<div>
				<NavLink to="/list">My Stamps</NavLink>
			</div>
			<div>
				<NavLink to="/edit_stamp">New Stamp</NavLink>
			</div>

			{/*<header className="App-header">
				<button onClick={e => {this.newIntake();}}>New Intake</button>
			</header>*/}
		</div>
		<div className="content">
			<Route path="/" exact component={Home}/>
			<Route path="/list" exact component={List}/>
			<Route path="/edit_stamp" exact component={EditStamp}/>
			<Route path="/edit_stamp/:id" exact component={EditStamp}/>
		</div>
	</div>
	</HashRouter>
);
}

export default App;
