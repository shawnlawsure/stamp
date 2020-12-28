import { combineReducers } from 'redux'
//import { configureStore } from '@reduxjs/toolkit';
import stamp from './stamp'
import staticData from './static'

const appReducer = combineReducers({
	stamp,
	staticData
})

export default appReducer