import PropTypes from 'prop-types';
import React from 'react';

const Choice = ({ data }) =>
	<span>
		<input id={data.cId} name={data.qId} type="radio" />
		<label htmlFor={data.cId}>{data.label}</label>
	</span>;

Choice.propTypes = {
	data: PropTypes.object
};

export default Choice;
