import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import YelpContext from '../../context/yelp/yelpContext';

const Search = ({ showClear, clearBusinesses, setAlert }) => {
	const yelpContext = useContext(YelpContext);
	const [text, setText] = useState('');

	const onChange = e => {
		setText(e.target.value);
	};
	// since using an arrow function theres no need to bind(this)
	const onSubmit = e => {
		e.preventDefault();
		if (text === '') {
			setAlert('Please enter something', 'light');
		} else {
			yelpContext.searchBusinesses(text);
			setText('');
		}
	};
	// once someone submits form it calls props.searchUsers
	// when it fires call this.searchUsers
	// which makes a request, which makes states the response

	return (
		<div>
			<form onSubmit={onSubmit} action="" className="form">
				<input
					type="text"
					name="text"
					value={text}
					placeholder="Search Naperville Businesses"
					onChange={onChange}
				/>
				<input type="submit" value="Search" className="btn" />
				{showClear && (
					<button className="clear" onClick={clearBusinesses}>
						Clear
					</button>
				)}
			</form>
		</div>
	);
};

Search.propTypes = {
	clearBusinesses: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired
};
export default Search;
