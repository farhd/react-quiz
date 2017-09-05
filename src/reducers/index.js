import { combineReducers } from 'redux';
import questions from './questions';
import result from './result';

const rootReducer = combineReducers({
	questions,
	result
});

export default rootReducer;
