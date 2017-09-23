import * as R from 'ramda';

export function generateQuestions() {
	return R.range(1, 9).map(num => {
		return {
			id: num,
			question: `Question ${num}`,
			options: ['a', 'b', 'c'],
			correctChoice: (Math.floor(Math.random() * 10)) % 3,
		};
	});
}
