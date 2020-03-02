import {
	SEARCH_BUSINESSES,
	SET_LOADING,
	CLEAR_BUSINESSES,
	GET_BUSINESS
} from './types';
// reduce takes state, action
export default (state, action) => {
	switch (action.type) {
		case SEARCH_BUSINESSES:
			return {
				...state,
				businesses: action.payload,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};
