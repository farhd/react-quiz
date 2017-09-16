import { combineReducers } from 'redux';
import questions from './questions';
import answers from './answers';
import result from './result';

const rootReducer = combineReducers({
	questions,
	answers,
	result,
});

export default rootReducer;
