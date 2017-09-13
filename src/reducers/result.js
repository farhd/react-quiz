import * as types from '../actions/types';
import * as R from 'ramda';

const initialState = {
	correct: 0,
	unanswered: 0
};

export default function result(state = initialState, action) {
	switch (action.type) {
		case types.SUBMIT_QUESTIONS:
			const { answers } = action;
			const correct = answers.filter(item =>
				item === true
			).length;
			const answered = answers.filter(item =>
				item !== null
			).length;
			const unanswered = answers.length - answered;

			return {
				correct,
				unanswered,
			};

		case types.RESET_QUESTIONS:
			return initialState;

		default:
			return state;
	}
}
