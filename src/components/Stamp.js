import React from 'react'
import {NavLink} from "react-router-dom";
import {Row, Col} from 'react-bootstrap';

class Stamp extends React.Component
{
	constructor(props)
	{
		super(props);

		var image = null;
		if (this.props.has_image && this.props.image) {
			var arrayBufferView = new Uint8Array(this.props.image.data);
			var blob = new Blob( [ arrayBufferView ], { type: this.props.image_type } );
			image = (window.URL || window.webkitURL).createObjectURL(blob);
		}
	
		this.state = {
			image: image
		  }
	}

	fullDescription () {
		var fullDesc = this.props.denomination + "\u00a2" + ", " +
				this.props.description + ', ' +
				this.props.year + ', ' +
				this.props.color;
		return fullDesc;
	}
	
	render
	() {
		return (
			<div className="stamp_tile">
						<NavLink to={"/edit_stamp/" + this.props.id}>

				<Row>
					<Col sm={5} className="my-auto">
						<img src={this.state.image} alt="Stamp" width="200" height="240" />
						<div>
							<span className="description">{this.fullDescription()}</span>
						</div>							
					</Col>
					<Col sm={6} className="my-auto">
						<Row>
							<Col sm={6}>
								<span className="float-right label">Denomination:</span>
							</Col>
							<Col sm={6}>
								<span className="float-left data">{this.props.denomination + '\u00a2'}</span>												
							</Col>
						</Row>
						<Row>
							<Col sm={6}>
								<span className="float-right label">Description:</span>
							</Col>
							<Col sm={6}>
								<span className="float-left data">{this.props.description}</span>												
							</Col>
						</Row>
						<Row>
							<Col sm={6}>
								<span className="float-right label">Year:</span>
							</Col>
							<Col sm={6}>
								<span className="float-left data">{this.props.year}</span>												
							</Col>
						</Row>
						<Row>
							<Col sm={6}>
								<span className="float-right label">Color:</span>
							</Col>
							<Col sm={6}>
								<span className="float-left data">{this.props.color}</span>												
							</Col>
						</Row>
					</Col>
				</Row>
				</NavLink>

			</div>
			);
		}

}
export default Stamp