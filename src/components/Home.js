import React from 'react'
//import $ from 'jquery';
import {NavLink} from "react-router-dom";

class Home extends React.Component
{
	/*constructor(props)
	{
		super(props);
	}*/

	componentDidMount() 
	{
		/*$.ajax("http://localhost:3000/intakes")
			.done((data, textStatus, jqXHR) => 
			{
				this.props.setInitialList(data);
			})
			.fail((jqXHR, textStatus, errorThrown) =>
			{
				console.log("Error: " + jqXHR.readyState);
			})*/
	}

	render
	() {
		return (
			<div>
				<div>
					<NavLink to="/list">My Stamps</NavLink>
				</div>
				<div>
					<NavLink to="/edit_stamp">New Stamp</NavLink>
				</div>
			</div>
			);
		}
}

export default Home