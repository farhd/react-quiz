import PropTypes from 'prop-types';
import React from 'react';

import * as picnic from 'picnic';

const Choice = ({ data, onChange }) => {
	const { qId, i, label, active } = data;
	const id = ''.concat(String(qId), String(i));

	return (
		<span>
			<input
				id={id}
				value={id}
				onChange={onChange}
				type="radio"
				checked={ active ? 'checked' : ''} />
			<label htmlFor={id} className={picnic.checkable}>
				{label}
			</label>
		</span>
	);
};

Choice.propTypes = {
	data: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired
};

export default Choice;
