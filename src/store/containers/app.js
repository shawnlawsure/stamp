import { connect } from 'react-redux'
import App from '../../App'
import { setInitialList} from '../actions/app.js'

const mapStateToProps = state => ({
	stampList: state.stamp.list
})

  const mapDispatchToProps = dispatch => ({
	setInitialList: data => dispatch(setInitialList(data))
  })

export default connect(mapStateToProps, mapDispatchToProps)(App)