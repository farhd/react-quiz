import * as types from '../actions/types';
import * as R from 'ramda';

const INITIAL_STATE = {
	questions: [],
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case types.CREATE_QUESTIONS:
			return {
				...state,
				questions: generateQuestions()
			};
		default:
			return state;
	}
}

function generateQuestions() {
	console.log('creating q"s');

	return R.range(1, 8).map(num => {
		return {
			'id': num,
			'question': `Question ${num}`,
			'options': ['a', 'b', 'c'],
			'answer': (Math.floor(Math.random() * 10)) % 3
		};
	});
}
