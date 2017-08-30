import PropTypes from 'prop-types';
import React from 'react';

const Checkbox = ({ data }) =>
	<span>
		<input id={data.id} type="checkbox" />
		<label htmlFor={data.id}>{data.label}</label>
	</span>;

Checkbox.propTypes = {
	data: PropTypes.object
};

export default Checkbox;
