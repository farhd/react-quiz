import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetQuestions } from '../actions';

import * as picnic from 'picnic';

class Result extends Component {
	static propTypes = {
		resetQuestions: PropTypes.func.isRequired,
		result: PropTypes.shape({
			correct: PropTypes.number.isRequired,
			answered: PropTypes.number.isRequired
		}).isRequired
	};

	constructor() {
		super();
	}

	handleReset() {
		this.props.resetQuestions();
	}

	render() {
		const { correct, answered } = this.props.result;
		return (
			<div className={`${picnic.flex} ${picnic.one} ${picnic.center}`}>
				<strong>Result:</strong>
				<div>Correct: {correct}</div>
				<div>Answered: {answered}</div>

				<div className={`${picnic.flex} ${picnic['four-700']} ${picnic.center}`}>
					<Link
						to="/"
						onClick={this.handleReset.bind(this)}
						className={picnic.button}>
						Try again
					</Link>

					<span className={`${picnic.flex} ${picnic['half-700']} ${picnic.center}`}>or</span>

					<Link to="/" className={picnic.button}>
						Review answers
					</Link>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		result: state.result
	};
};

export default connect(mapStateToProps, {
	resetQuestions
})(Result);
