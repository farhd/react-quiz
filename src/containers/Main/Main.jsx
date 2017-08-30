import PropTypes from 'prop-types';
import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { filterTable } from '../../actions';
// import * as actionCreators from './actionCreator
import QuestionList from '../../components/QuestionList';
const styles = require('../../styles/app.scss');

const testList = [
	{
		'id': 1,
		'question': 'Question 1',
		'options': ['a', 'b', 'c'],
		'answer': 0
	},
	{
		'id': 2,
		'question': 'Question 2',
		'options': ['a', 'b', 'c'],
		'answer': 2
	}
];

export class Main extends Component {
	static propTypes = {
		dispatch: PropTypes.func,
		filter: PropTypes.string,
		counter: PropTypes.number
	};

	constructor() {
		super();
		this.onFilterChange = this.onFilterChange.bind(this);
	}

	onFilterChange(value) {
		this.props.dispatch(filterTable(value));
	}

	render() {
		return (
			<div className={styles.content + ' ' + styles.wrapper}>
				<div className={styles['content--wrap']}>
					<QuestionList data={testList} />
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

export default connect( mapStateToProps )(Main);
