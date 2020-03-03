import React, { useState, useContext } from 'react';
import YelpContext from '../../context/yelp/yelpContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
	const yelpContext = useContext(YelpContext);
	const alertContext = useContext(AlertContext);

	const [text, setText] = useState('');

	const onChange = e => {
		setText(e.target.value);
	};
	// since using an arrow function theres no need to bind(this)
	const onSubmit = e => {
		e.preventDefault();
		if (text === '') {
			alertContext.setAlert('Please enter something', 'light');
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
				{yelpContext.businesses.length > 0 && (
					<button className="clear" onClick={yelpContext.clearBusinesses}>
						Clear
					</button>
				)}
			</form>
		</div>
	);
};

export default Search;
