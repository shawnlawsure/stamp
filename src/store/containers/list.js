import { connect } from 'react-redux'
import List from '../../components/List'

const mapStateToProps = state => ({
	stampList: state.stamp.list
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(List)