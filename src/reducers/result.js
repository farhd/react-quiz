import * as types from '../actions/types';
import * as R from 'ramda';

const initialState = {
	correct: 0,
	answered: 0
};

export default function result(state = initialState, action) {
	switch (action.type) {
		case types.GET_RESULT:
			const { correctAnswers, userAnswers } = action;
			const answered = Object.keys(userAnswers).length;
			const correct = R.filter(item => item === true, userAnswers);

			return {
				correct: 0,
				answered
			};

		case types.RESET_QUESTIONS:
			return initialState;

		default:
			return state;
	}
}
