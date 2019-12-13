import {createStore, combineReducers, applyMiddleware} from 'redux'
// import thunkMiddleware from 'redux-thunk'
import counter  from './reducers/counter'
import { StoreState } from '../types/index'

/* export default createStore(
  combineReducers({counter}), 
  // applyMiddleware(thunkMiddleware)
) */

export default createStore(counter)
