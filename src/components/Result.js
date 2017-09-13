import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetQuestions } from '../actions';

class Result extends Component {
	static propTypes = {
		resetQuestions: PropTypes.func
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
			<div>
				<strong>Result:</strong>
				<div>Correct: {correct}</div>
				<div>Unanswered: {unanswered}</div>
				<hr />
				<button onClick={this.handleReset.bind(this)}>
					<Link to="/">
						Try again
					</Link>
				</button>
				<span>or</span>
				<button>
					<Link to="/">
						Review answers
					</Link>
				</button>
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
