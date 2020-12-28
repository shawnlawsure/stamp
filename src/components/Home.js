import React from 'react'
//import $ from 'jquery';

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
				<h5>Home</h5>
			</div>
			);
		}
}

export default Home