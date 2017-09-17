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

	test('+++ ANSWER_QUESTION', () => {
		const oldState = {};
		const action = {
			type: 'ANSWER_QUESTION',
			qId: 1,
			cId: 0
		};
		const newState = reducers(oldState, action);
		expect(newState).toEqual(
			{
				questions: [],
				answers: {
					1: 0
				},
				result: {
					answered: 0,
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
