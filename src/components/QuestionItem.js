import PropTypes from 'prop-types';
import React from 'react';
import Choice from '../containers/Choice';

const QuestionItem = ({ data }) => {
	const options = data.options.map((item, i) => {
		const qId = data.id;
		return <Choice key={i} data={{
			qId,
			label: item,
			i
		}} />;
	});

	return (
		<div>
			<p>{data.question}</p>
			{ options }
		</div>
	);
};

QuestionItem.propTypes = {
	data: PropTypes.object.isRequired
};

export default QuestionItem;
