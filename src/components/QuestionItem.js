import PropTypes from 'prop-types';
import React from 'react';
import Checkbox from './Checkbox';

const QuestionItem = ({ data }) => {
	const options = data.options.map((item, i) =>
		<Checkbox key={i} data={{'id': data.id, 'label': item}} />
	);

	return (
		<div>
			<p>{data.question}</p>
			{ options }
		</div>
	);
};

QuestionItem.propTypes = {
	data: PropTypes.object
};

export default QuestionItem;
