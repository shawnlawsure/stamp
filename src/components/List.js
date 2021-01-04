import React from 'react'
//import {NavLink} from "react-router-dom";
import Stamp from '../store/containers/stamp.js';

class List extends React.Component
{
	/*constructor(props)
	{
		super(props);
	}*/

	render
	() {
		return (
			<div>
				{this.props.stampList.map((item) => 
					<Stamp id={item.id} key={item.id}></Stamp>)
				}
			</div>
			);
		}
}

export default List