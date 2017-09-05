import PropTypes from 'prop-types';
import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { createQuestions, submitQuestions } from '../../actions';
// import * as actionCreators from './actionCreator
import QuestionList from '../../components/QuestionList';
const styles = require('../../styles/app.scss');

export class Main extends Component {
	static propTypes = {
		createQuestions: PropTypes.func,
		questions: PropTypes.array
	};

	constructor() {
		super();
	}

	componentDidMount() {
		this.props.createQuestions();
	}

	submitAnswers() {
		const answers = this.props.questions.map(item =>
			item.userChoice === null ? null : item.userChoice === item.correctChoice
		);
		this.props.submitQuestions(answers);
	}

	render() {
		return (
			<div className={styles.content + ' ' + styles.wrapper}>
				<div className={styles['content--wrap']}>
					<QuestionList data={this.props.questions} />

					<button onClick={this.submitAnswers.bind(this)}>Submit</button>
				</div>
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
