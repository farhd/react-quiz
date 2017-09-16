import PropTypes from 'prop-types';
import React, { Component }  from 'react';
import { connect } from 'react-redux';
import {
	Link
} from 'react-router-dom';

import { createQuestions, submitQuestions } from '../actions';
// import * as actionCreators from './actionCreator
import QuestionList from '../components/QuestionList';

export class Main extends Component {
	static propTypes = {
		createQuestions: PropTypes.func.isRequired,
		submitQuestions: PropTypes.func.isRequired,
		questions: PropTypes.array.isRequired
	};

	constructor() {
		super();
	}

	componentDidMount() {
		if (this.props.questions.length === 0) {
			this.props.createQuestions();
		}
	}

	submitAnswers() {
		const answers = this.props.questions.map(item =>
			item.userChoice === null ? null : item.userChoice === item.correctChoice
		);
		this.props.submitQuestions(answers);
	}

	render() {
		return (
			<div>
				<QuestionList data={this.props.questions} />
				<br />
				<Link
					to="/result"
					onClick={this.submitAnswers.bind(this)}
					className="button">
					Submit
				</Link>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state
	};
};

export default connect( mapStateToProps, {
	createQuestions,
	submitQuestions
} )(Main);
