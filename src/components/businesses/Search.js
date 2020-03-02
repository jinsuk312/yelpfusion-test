import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearBusinesses, setAlert }) => {
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
			searchUsers(text);
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
	searchUsers: PropTypes.func.isRequired,
	clearBusinesses: PropTypes.func.isRequired,
	showClear: PropTypes.bool.isRequired,
	setAlert: PropTypes.func.isRequired
};
export default Search;
