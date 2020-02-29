import React from 'react';

const Search = () => {
	return (
		<div>
			<form action="" className="form">
				<input
					type="text"
					name="text"
					placeholder="Search Naperville Businesses"
				/>
				<input type="submit" value="Search" className="btn" />
			</form>
		</div>
	);
};

export default Search;
