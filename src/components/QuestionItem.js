import PropTypes from 'prop-types';
import React from 'react';
import Choice from './Choice';

const QuestionItem = ({ data }) => {
	const options = data.options.map((item, i) => {
		const id = ''.concat(String(data.id), String(i));
		return <Choice key={i} data={ {cId: id, qId: data.id, 'label': item} } />;
	});

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
