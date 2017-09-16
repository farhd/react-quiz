import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { answerQuestion } from '../actions/';

export class Choice extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired,
		answerQuestion: PropTypes.func.isRequired,
		answers: PropTypes.object.isRequired
	};

	render() {
		const { data } = this.props;
		const { qId, i, label } = data;
		const id = ''.concat(String(data.qId), String(data.i));
		const answers = this.props.answers;
		const active = answers[qId] !== undefined ? answers[qId] === i : false;
		return (
			<span>
				<input
					id={id}
					value={id}
					onChange={this.props.answerQuestion.bind(this, qId, i)}
					type="radio"
					checked={ active ? 'checked' : ''} />
				<label htmlFor={id} className="checkable">
					{label}
				</label>
			</span>
		);
	}
}


const mapStateToProps = (state, ownProps) => {
	return {
		data: ownProps.data,
		answers: state.answers
	};
};

export default connect(mapStateToProps, { answerQuestion })(Choice);
