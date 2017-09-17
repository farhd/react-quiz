import {
	createQuestions,
	answerQuestion,
	submitQuestions,
	resetQuestions
} from '../src/actions/index';

describe('>>> A C T I O N S <<<', () => {
	test('actionCreator: createQuestions', () => {
		const actual = createQuestions();
		const expected = {
			type: 'CREATE_QUESTIONS'
		};
		expect(actual).toEqual(expected);
	});

	test('actionCreator: answerQuestion', () => {
		const actual = answerQuestion(1, 0);
		const expected = {
			type: 'ANSWER_QUESTION',
			qId: 1,
			cId: 0
		};
		expect(actual).toEqual(expected);
	});

	test('actionCreator: submitQuestions', () => {
		const actual = submitQuestions();
		const expected = {
			type: 'SUBMIT_QUESTIONS',
			answers: null
		};
		expect(actual).toEqual(expected);
	});

	test('actionCreator: resetQuestions', () => {
		const actual = resetQuestions();
		const expected = {
			type: 'RESET_QUESTIONS',
		};
		expect(actual).toEqual(expected);
	});
});

