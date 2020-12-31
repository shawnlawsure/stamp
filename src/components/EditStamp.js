import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
//import { ToggleButtonGroup, ToggleButton, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import {NavLink} from "react-router-dom";

class EditStamp extends React.Component
{
	constructor(props)
	{
		super(props);

		//this.props.initStamp(this.props.match.params.id);

		this.denomination = React.createRef();
		this.description = React.createRef();
		this.year = React.createRef();
		this.color = React.createRef();
		this.file = React.createRef();

		var image = null;
		if (this.props.has_image && this.props.image) {
			//var b64encoded = btoa(String.fromCharCode.apply(null, this.props.image));
			//console.log('image: ' + this.props.image);
			//image = "data:" + this.props.image_type + ";base64," + b64encoded;

			var arrayBufferView = new Uint8Array(this.props.image.data);
			var blob = new Blob( [ arrayBufferView ], { type: this.props.image_type } );
			var urlCreator = window.URL || window.webkitURL;
			image = urlCreator.createObjectURL(blob);
		}

		
		this.state = {
			file: null,
			image: image
		  }
		this.handleFileChange = this.handleFileChange.bind(this)	  
	}

	handleFileChange(event)
	{
		this.setState({
			file: event.target.files[0],
			image: (window.URL || window.webkitURL).createObjectURL(event.target.files[0])
		})
	}

	save(event)
	{
		let data = 
		{ 
			id: this.props.match.params.id,
			denomination: this.denomination.current.value,
			description: this.description.current.value,
			year: this.year.current.value,
			color: this.color.current.value,
			save_file: this.state.file != null,
			file: this.state.file
		};
		this.props.saveStamp(data);
		//event.preventDefault();
	}

	componentWillUnmount() {	
		if (this.state.image) {
			(window.URL || window.webkitURL).revokeObjectURL(this.state.image)
		}
	  }

	render
	() 	{
		return (
			<Form>
				<h5>Add New Stamp</h5>
				<Form.Group as={Row} controlId='formDenomination'>
					<Form.Label column sm={2}>Denomination:</Form.Label>
					<Col sm={1}>
						<Form.Control 	ref={this.denomination} 
										type="input" 
										placeholder="" 
										defaultValue={this.props.denomination} />
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId='formDescription'>
					<Form.Label column sm={2}>Description</Form.Label>
					<Col sm={10}>
						<Form.Control 	ref={this.description} 
										type="input" 
										placeholder="Enter stamp description" 
										defaultValue={this.props.description} />
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId='formYear'>
					<Form.Label column sm={2}>Year</Form.Label>
					<Col sm={10}>
						<Form.Control 	ref={this.year} 
										type="input" 
										placeholder="Enter stamp year" 
										defaultValue={this.props.year} />
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId='formColor'>
					<Form.Label column sm={2}>Color</Form.Label>
					<Col sm={10}>
						<Form.Control 	ref={this.color} 
										type="input" 
										placeholder="Enter stamp year" 
										defaultValue={this.props.color} />
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId='formImage'>
					<Form.Label column sm={2}>Image:</Form.Label>
					<Col sm={1}>
						<Form.File 	ref={this.file}
									name="upload"
									onChange={this.handleFileChange} />
						<img src={this.state.image} alt="Stamp" width="200" height="240" />
					</Col>
				</Form.Group>

				<Button as={NavLink} to="/list" onClick={e => {this.save(e);}}>Save</Button>
			</Form>
			);
		}	
}

export default EditStamp