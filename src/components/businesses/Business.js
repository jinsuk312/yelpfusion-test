import React, { useEffect, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Business = ({ business, loading, getBusiness, match }) => {
	useEffect(() => {
		getBusiness(match.params.id);
		//eslint-disable-next-line
	}, []);

	const {
		name,
		image_url,
		display_phone,
		rating,
		url,
		review_count
	} = business;

	if (loading) return <Spinner />;

	return (
		<Fragment>
			<Link to="/" className="btn">
				Back to Search
			</Link>
			<div className="grid-2">
				<div>
					<div>
						<img src={image_url} alt="business" style={{ width: '150px' }} />
						<h1>{name}</h1>
						<p>Phone: {display_phone}</p>
						<p>Rating: {rating}</p>
						<p>Review Count: {review_count}</p>
					</div>
				</div>
			</div>

			<div>
				Website: <a href={url}>Link</a>
			</div>
		</Fragment>
	);
};

Business.propTypes = {
	loading: PropTypes.bool,
	business: PropTypes.object.isRequired,
	getBusiness: PropTypes.func.isRequired
};
export default Business;
