import React from 'react';
import PropTypes from 'prop-types';

const BusinessItem = props => {
	const { login, avatar_url, html_url } = props.user;
	return (
		<div style={businessStyle}>
			<img
				src={avatar_url}
				alt="client"
				className="business"
				style={{ width: '60px' }}
			/>
			<h3>{login}</h3>
			<div>
				<a href={html_url}>more</a>
			</div>
		</div>
	);
};
BusinessItem.propTypes = {
	business: PropTypes.object.isRequired
};
const businessStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
};

export default BusinessItem;
