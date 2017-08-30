import * as types from '../actions/types';

export default function question(state = '', action) {
	switch (action.type) {
		case types.QUESTION:
			return action.filter;
		default:
			return state;
	}
}
