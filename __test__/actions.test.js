import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
	createQuestions,
	answerQuestion,
	updateResult,
	answerAndCheck,
	resetQuestions,
} from '../src/actions/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('>>> A C T I O N S <<<', () => {
	test('actionCreator: createQuestions', () => {
		const actual = createQuestions();
		const expected = {
			type: 'CREATE_QUESTIONS'
		};
		expect(actual).toEqual(expected);
	});

	test('actionCreator: answerQuestion', () => {
		const actual = answerQuestion(1, 0, true);
		const expected = {
			type: 'ANSWER_QUESTION',
			qId: 1,
			cId: 0,
			isCorrect: true
		};
		expect(actual).toEqual(expected);
	});


	test('actionCreator: updateResult', () => {
		const actual = updateResult({
			1: {
				cId: 0,
				isCorrect: true
			}
		});
		const expected = {
			type: 'UPDATE_RESULT',
			answers: {
				1: {
					cId: 0,
					isCorrect: true
				}
			}
		};
		expect(actual).toEqual(expected);
	});

	// FIXME: thunk testing
	test('actionCreator: answerAndCheck', () => {
		const action = answerAndCheck({
			qId: 1,
			cId: 0,
			isCorrect: true
		});
		const expected = [
			{
				type: 'ANSWER_QUESTION',
				qId: 1,
				cId: 0,
				isCorrect: true
			},
			{
				type: 'UPDATE_RESULT',
				answers: {
					1: {
						cId: 0,
						isCorrect: true
					}
				}
			}
		];

		const store = mockStore({
			questions: [],
			answers: {},
			result: {
				answered: 0,
				correct: 0
			},
		});

		store.dispatch(action);
		expect(store.getActions()).toEqual(expected);
	});

	test('actionCreator: resetQuestions', () => {
		const actual = resetQuestions();
		const expected = {
			type: 'RESET_QUESTIONS',
		};
		expect(actual).toEqual(expected);
	});
});

