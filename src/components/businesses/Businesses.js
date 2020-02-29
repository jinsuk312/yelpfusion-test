import React, { Component } from 'react';
import BusinessItem from './BusinessItem';
class Businesses extends Component {
	state = {
		businesses: []
	};
	render() {
		return (
			<div>
				{this.state.businesses.map(business => (
					<BusinessItem key={business.id} business={business} />
				))}
			</div>
		);
	}
}

export default Businesses;
