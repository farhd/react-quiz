import * as types from '../actions/types';
import * as R from 'ramda';

export default function questions(state = [], action) {
	switch (action.type) {
		case types.CREATE_QUESTIONS:
			return state.concat(generateQuestions());

		default:
			return state;
	}
}

function generateQuestions() {
	return R.range(1, 9).map(num => {
		return {
			id: num,
			question: `Question ${num}`,
			options: ['a', 'b', 'c'],
			correctChoice: (Math.floor(Math.random() * 10)) % 3,
			userChoice: null,
		};
	});
}
