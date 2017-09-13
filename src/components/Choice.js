import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { answerQuestion } from '../actions/';

export class Choice extends Component {
	static propTypes = {
		data: PropTypes.object,
		answerQuestion: PropTypes.func
	};

	render() {
		const { data } = this.props;
		return (
			<span>
				<input
					id={data.cId}
					name={data.qId}
					value={data.cId}
					onChange={this.props.answerQuestion.bind(this, data.qId, data.i)}
					type="radio"
					checked={data.checked ? 'checked' : ''} />
				<label htmlFor={data.cId} className="checkable">{data.label}</label>
			</span>
		);
	}
}


const mapStateToProps = (state, ownProps) => {
	return {
		data: ownProps.data
	};
};

export default connect(mapStateToProps, { answerQuestion })(Choice);
