import React from 'react';
import './App.css';
import $ from 'jquery';

import {Route, NavLink, HashRouter} from "react-router-dom";

import Home from './components/Home'
import EditStamp from './store/containers/edit_stamp.js';
import List from './store/containers/list.js';

class App extends React.Component  {

	componentDidMount() 
	{
		$.ajax("http://localhost:3000/stamps")
			.done((data, textStatus, jqXHR) => 
			{
				this.props.setInitialList(data);
			})
			.fail((jqXHR, textStatus, errorThrown) =>
			{
				console.log("Error: " + jqXHR.readyState);
			})
	}

	render () 
	{
		return (
			<HashRouter>
			<div className="App">
				<div className="header" >
					<NavLink to="/">
						<h1>Stamp Catalog</h1>
					</NavLink>
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
}

export default App;
