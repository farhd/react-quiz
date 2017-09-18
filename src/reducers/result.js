import * as types from '../actions/types';
import * as R from 'ramda';

const initialState = {
	correct: 0,
	answered: 0
};

export default function result(state = initialState, action) {
	switch (action.type) {
		case types.UPDATE_RESULT:
			const { answers } = action;
			const answered = Object.keys(answers).length;
			const correctObjects = R.filter(item => item.isCorrect === true, answers);
			const correct = Object.keys(correctObjects).length;

			return {
				correct,
				answered
			};

		case types.RESET_QUESTIONS:
			return initialState;

		default:
			return state;
	}
}
