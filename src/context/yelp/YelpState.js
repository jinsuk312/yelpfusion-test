import React, { useReducer } from 'react';
import axios from 'axios';
import YelpContext from './yelpContext';
import YelpReducer from './yelpReducer';
import {
	SEARCH_BUSINESSES,
	SET_LOADING,
	CLEAR_BUSINESSES,
	GET_BUSINESS
} from './types';

const YelpState = props => {
	const initialState = {
		businesses: [],
		business: {},
		loading: false
	};
	const [state, dispatch] = useReducer(YelpReducer, initialState);

	//search businesses

	// get business

	// clear businesses

	// set loading

	return (
		<YelpContext.Provider
			value={{
				businesses: state.businesses,
				business: state.business,
				loading: state.loading
			}}
		>
			{props.children}
		</YelpContext.Provider>
	);
};

export default YelpState;
