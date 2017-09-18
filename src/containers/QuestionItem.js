import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { answerAndCheck } from '../actions/';
import Choice from '../components/Choice';

export class QuestionItem extends Component {
	static propTypes = {
		data: PropTypes.object.isRequired,
		answerAndCheck: PropTypes.func.isRequired,
		answers: PropTypes.object.isRequired
	};

	onChoiceHandler(qId, i) {
		const isCorrect = this.props.data.correctChoice === i;
		this.props.answerAndCheck(qId, i, isCorrect);
	}

	render() {
		const { data, answers } = this.props;
		const qId = data.id;
		const options = this.props.data.options.map((item, i) => {
			return <Choice key={i} onChange={this.onChoiceHandler.bind(this, qId, i)} data={{
				qId,
				label: item,
				i,
				active: answers[qId] !== undefined ? answers[qId].cId === i : false
			}} />;
		});

		return (
			<div>
				<p>{data.question}</p>
				{ options }
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		data: ownProps.data,
		answers: state.answers
	};
};

export default connect(mapStateToProps, { answerAndCheck })(QuestionItem);
