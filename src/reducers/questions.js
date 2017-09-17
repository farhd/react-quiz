import * as types from '../actions/types';
import * as questionUtils from '../utils/questionsUtils';

export default function questions(state = [], action) {
	switch (action.type) {
		case types.CREATE_QUESTIONS:
			return state.concat(questionUtils.generateQuestions());

		default:
			return state;
	}
}
