import * as types from '../actions/types';

const initialState = {};

export default function result(state = initialState, action) {
	switch (action.type) {
		case types.ANSWER_QUESTION:
			const { qId, cId, isCorrect } = action;
			return {
				...state,
				[qId]: {
					cId,
					isCorrect
				}
			};

		case types.RESET_QUESTIONS:
			return initialState;

		default:
			return state;
	}
}
