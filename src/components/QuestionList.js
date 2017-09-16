import PropTypes from 'prop-types';
import React from 'react';
import QuestionItem from './QuestionItem';

const QuestionList = ({ data = [] }) => {
	const questions = data.map((item, i) =>
		<QuestionItem key={i} data={item} />
	);

	return <div>{ questions }</div>;
};

QuestionList.propTypes = {
	data: PropTypes.array.isRequired
};

export default QuestionList;
