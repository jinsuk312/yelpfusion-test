import React, { useContext } from 'react';
import BusinessItem from './BusinessItem';
import Spinner from '../layout/Spinner';
import YelpContext from '../../context/yelp/yelpContext';
const Businesses = () => {
	const yelpContext = useContext(YelpContext);
	if (yelpContext.loading) {
		return <Spinner />;
	} else {
		return (
			<div style={businessStyle}>
				{yelpContext.businesses.map(business => (
					<BusinessItem
						key={business.id}
						image_url={business.image_url}
						name={business.name}
						business={business}
					/>
				))}
			</div>
		);
	}
};

const businessStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
};

export default Businesses;
