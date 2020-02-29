import React from 'react';
import PropTypes from 'prop-types';

const BusinessItem = props => {
	const { image_url, name } = props.business;
	return (
		<div style={businessStyle}>
			<img
				src={image_url}
				alt="client"
				className="business"
				style={{ width: '60px' }}
			/>
			<h3>Name: {name} </h3>
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
