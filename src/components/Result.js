import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetQuestions } from '../actions';

class Result extends Component {
	static propTypes = {
		resetQuestions: PropTypes.func.isRequired,
		result: PropTypes.shape({
			correct: PropTypes.number.isRequired,
			unanswered: PropTypes.number.isRequired
		}).isRequired
	};

	constructor() {
		super();
	}

	handleReset() {
		this.props.resetQuestions();
	}

	render() {
		const { correct, unanswered } = this.props.result;
		return (
			<div className="flex one center">
				<strong>Result:</strong>
				<div>Correct: {correct}</div>
				<div>Unanswered: {unanswered}</div>

				<div className="flex four-700 center">
					<Link
						to="/"
						onClick={this.handleReset.bind(this)}
						className="button">
						Try again
					</Link>

					<span className="flex half-700 center">or</span>

					<Link to="/" className="button">
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
