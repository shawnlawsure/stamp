const initialState = {
	//housingTypes: []
  }

const staticData = (state = initialState, action) => {
	
	switch (action.type) {
	  //case 'SET_HOUSINGTYPES':
	  //	return Object.assign({}, state, {housingTypes: action.data})
	  default:
		return state
	}

  }

  export default staticData