import { FETCH_FAVORITES } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_FAVORITES:
			return action.payload;
		default:
			return state;
	}
}
