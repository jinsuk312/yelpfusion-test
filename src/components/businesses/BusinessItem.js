import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BusinessItem = props => {
	const { image_url, name, id } = props.business;
	return (
		<div className="card text-center">
			<img
				src={image_url}
				alt="client"
				className="round-img"
				style={{ width: '60px' }}
			/>
			<h3>Name: {name} </h3>
			<Link to={`/user/${id}`} className="btn btn-dark btn-sm my-1">
				More
			</Link>
		</div>
	);
};
BusinessItem.propTypes = {
	business: PropTypes.object.isRequired
};
// const businessStyle = {
// 	display: 'grid',
// 	gridTemplateColumns: 'repeat(3, 1fr)',
// 	gridGap: '1rem'
// };

export default BusinessItem;
