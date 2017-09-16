import PropTypes from 'prop-types';
import React from 'react';
import Choice from './Choice';

const QuestionItem = ({ data }) => {
	const options = data.options.map((item, i) => {
		const cId = ''.concat(String(data.id), String(i));
		const qId = data.id;
		return <Choice key={i} data={{
			cId,
			qId,
			label: item,
			i,
			checked: data.userChoice === i
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
