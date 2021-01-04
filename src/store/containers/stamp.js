import { connect } from 'react-redux'
import Stamp from '../../components/Stamp'
import { getStampImage } from '../../data.js'

function mapStateToProps(state, ownProps) {

	const id = ownProps.id;
	var stamp = state.stamp.list.find(item => item.id === id);
	
	if (stamp && stamp.has_image && !stamp.image) {
		stamp.image = getStampImage(id);
	}

	return {
		id: stamp ? stamp.id : '',
		denomination: stamp ? stamp.denomination : '',
		description: stamp ? stamp.description : '',
		year: stamp ? stamp.year : '',
		color: stamp ? stamp.color : '',
		image: stamp ? stamp.image : null,
		image_type: stamp ? stamp.image_type : '',
		has_image: stamp ? stamp.has_image : false
	};
  }

  //const mapDispatchToProps = dispatch => ({
  //})

  export default connect(mapStateToProps, null)(Stamp)