import * as types from './types';

export function createQuestions() {
	return {
		type: types.CREATE_QUESTIONS
	};
}

export function answerQuestion(qId, cId, isCorrect) {
	return {
		type: types.ANSWER_QUESTION,
		qId,
		cId,
		isCorrect
	};
}

export function updateResult(answers) {
	return {
		type: types.UPDATE_RESULT,
		answers
	};
}

export function answerAndCheck(qId, cId, isCorrect) {
	return (dispatch, getState) => {
		dispatch(answerQuestion(qId, cId, isCorrect));
		return dispatch(updateResult(getState().answers));
	};
}

export function resetQuestions() {
	return {
		type: types.RESET_QUESTIONS
	};
}
