import * as types from '../actions/types';

const initialState = {};

export default function result(state = initialState, action) {
	switch (action.type) {
		case types.ANSWER_QUESTION:
			const { qId, cId } = action;
			return {
				...state,
				[qId]: cId
			};

		case types.RESET_QUESTIONS:
			return initialState;

		default:
			return state;
	}
}
