import reducers from '../src/reducers';
import React from 'react';
import * as questionUtils from '../src/utils/questionsUtils';

describe('>>> R E D U C E R S <<<',()=>{
	test('+++ INIT STORE', () => {
		const state = reducers( undefined, {} );
		expect(state).toEqual(
			{
				questions: [],
				answers: {},
				result: {
					answered: 0,
					correct: 0
				},
			}
		);
	});

	test('+++ CREATE_QUESTIONS', () => {
		const oldState = {
			questions: [],
			answers: {},
			result: {
				answered: 0,
				correct: 0
			},
		};
		const action = {
			type: 'CREATE_QUESTIONS',
		};
		const newState = reducers(oldState, action);
		const questionsCreated = newState.questions.length;

		expect(questionsCreated).toBeGreaterThan(0);
	});

	test('+++ ANSWER_QUESTION', () => {
		const oldState = {
			questions: [],
			answers: {},
			result: {
				answered: 0,
				correct: 0
			},
		};
		const action = {
			type: 'ANSWER_QUESTION',
			qId: 1,
			cId: 0,
			isCorrect: true
		};
		const newState = reducers(oldState, action);
		expect(newState).toEqual(
			{
				questions: [],
				answers: {
					1: {
						cId: 0,
						isCorrect: true
					}
				},
				result: {
					answered: 0,
					correct: 0
				},
			}
		);
	});

	test('+++ UPDATE_RESULT - positive', () => {
		const oldState = {
			questions: [],
			answers: {
				1: {
					cId: 0,
					isCorrect: true
				}
			},
			result: {
				answered: 0,
				correct: 0
			},
		};
		const action = {
			type: 'UPDATE_RESULT',
			answers: {
				1: {
					cId: 0,
					isCorrect: true
				}
			}
		};
		const newState = reducers(oldState, action);
		expect(newState).toEqual(
			{
				questions: [],
				answers: {
					1: {
						cId: 0,
						isCorrect: true
					}
				},
				result: {
					answered: 1,
					correct: 1
				},
			}
		);
	});

	test('+++ UPDATE_RESULT - negative', () => {
		const oldState = {
			questions: [],
			answers: {
				1: {
					cId: 0,
					isCorrect: false
				}
			},
			result: {
				answered: 0,
				correct: 0
			},
		};
		const action = {
			type: 'UPDATE_RESULT',
			answers: {
				1: {
					cId: 0,
					isCorrect: false
				}
			}
		};
		const newState = reducers(oldState, action);
		expect(newState).toEqual(
			{
				questions: [],
				answers: {
					1: {
						cId: 0,
						isCorrect: false
					}
				},
				result: {
					answered: 1,
					correct: 0
				},
			}
		);
	});

	test('+++ RESET_QUESTIONS', () => {
		const oldState = {
			questions: [],
			answers: {
				1: 0
			},
			result: {
				answered: 2,
				correct: 1
			},
		};
		const action = {
			type: 'RESET_QUESTIONS',
		};
		const newState = reducers(oldState, action);
		expect(newState).toEqual(
			{
				questions: [],
				answers: {},
				result: {
					answered: 0,
					correct: 0
				},
			}
		);
	});

});
