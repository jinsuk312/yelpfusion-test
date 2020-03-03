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
	const searchBusinesses = async text => {
		setLoading();
		const res = await axios
			.get(
				`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search`,
				{
					headers: {
						Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
					},
					// another format for url params
					params: {
						location: 'naperville, il',
						term: `${text}`,
						distance: 0
					}
				}
			)
			.then(res => {
				dispatch({
					type: SEARCH_BUSINESSES,
					payload: res.data.businesses
				});
			})
			.catch(err => {
				console.error(err);
			});
	};
	// get business
	const getBusiness = async id => {
		setLoading();

		const res = await axios
			.get(
				`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`,
				{
					headers: {
						Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
					}
				}
			)
			.then(res => {
				dispatch({
					type: GET_BUSINESS,
					payload: res.data
				});
			})
			.catch(err => {
				console.error(err);
			});
	};
	// clear businesses
	const clearBusinesses = () => dispatch({ type: CLEAR_BUSINESSES });
	// set loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<YelpContext.Provider
			value={{
				businesses: state.businesses,
				business: state.business,
				loading: state.loading,
				searchBusinesses,
				clearBusinesses,
				getBusiness
			}}
		>
			{props.children}
		</YelpContext.Provider>
	);
};

export default YelpState;
