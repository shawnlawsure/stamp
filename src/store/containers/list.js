import { connect } from 'react-redux'
import List from '../../components/List'
import { setInitialList} from '../actions/app.js'

const mapStateToProps = state => ({
	stampList: state.stamp.list
})

const mapDispatchToProps = dispatch => ({
	setInitialList: data => dispatch(setInitialList(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)