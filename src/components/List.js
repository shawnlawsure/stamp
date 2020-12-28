import React from 'react'
import $ from 'jquery';
import {NavLink} from "react-router-dom";

class List extends React.Component
{
	/*constructor(props)
	{
		super(props);
	}*/

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

	render
	() {
		return (
			<div>
				<h5>Stamp List</h5>
				<ul>
					{this.props.stampList.map((item) => 
						<li key={item.id}>
							<NavLink to={"/edit_stamp/" + item.id}>{item.denomination + ' ' +  item.description}</NavLink>
							<span style={{marginLeft: '15px'}}>{item.year}</span>
						</li>)
					}
				</ul>				
			</div>
			);
		}
}

export default List