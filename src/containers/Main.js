import PropTypes from 'prop-types';
import React, { Component }  from 'react';
import { connect } from 'react-redux';
import {
	Link
} from 'react-router-dom';

import { createQuestions, updateResult } from '../actions';
// import * as actionCreators from './actionCreator
import QuestionList from '../components/QuestionList';

export class Main extends Component {
	static propTypes = {
		createQuestions: PropTypes.func.isRequired,
		updateResult: PropTypes.func.isRequired,
		questions: PropTypes.array.isRequired,
		answers: PropTypes.object.isRequired
	};

	constructor() {
		super();
	}

	componentDidMount() {
		if (this.props.questions.length === 0) {
			this.props.createQuestions();
		}
	}

	render() {
		return (
			<div>
				<QuestionList data={this.props.questions} />
				<br />
				<Link
					to="/result"
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
	updateResult
} )(Main);
