import * as types from './types';

export function createQuestions() {
	return {
		type: types.CREATE_QUESTIONS
	};
}

export function answerQuestion(qId, cId) {
	return {
		type: types.ANSWER_QUESTION,
		qId,
		cId
	};
}

export function submitQuestions() {
	return {
		type: types.SUBMIT_QUESTIONS
	};
}

export function resetQuestions() {
	return {
		type: types.RESET_QUESTIONS
	};
}
