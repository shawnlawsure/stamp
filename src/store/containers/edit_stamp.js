import { connect } from 'react-redux'
import EditStamp from '../../components/EditStamp'
import { initStamp, saveStamp} from '../actions/app.js'

function mapStateToProps(state, ownProps) {

	const id = ownProps.match.params.id;
	let stamp = state.stamp.list.find(item => item.id === id);
	
	return {
		id: stamp ? stamp.id : '',
		denomination: stamp ? stamp.denomination : '',
		description: stamp ? stamp.description : '',
		year: stamp ? stamp.year : '',
		color: stamp ? stamp.color : '',
		image: stamp ? stamp.image : ''
		//housingTypes: state.staticData.housingTypes};
	};
  }

  const mapDispatchToProps = dispatch => ({
	initStamp: id => dispatch(initStamp(id)),
	saveStamp: data => dispatch(saveStamp(data))
  })

  export default connect(mapStateToProps, mapDispatchToProps)(EditStamp)