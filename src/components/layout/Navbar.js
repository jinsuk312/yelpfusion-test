import React from 'react';
import PropTypes from 'prop-types';

const Navbar = props => {
	return (
		<nav>
			<h1>
				<i className={props.icon} /> {props.title}
			</h1>
		</nav>
	);
};
Navbar.defaultProps = {
	title: 'Naperville Businesses',
	icon: 'fab fa-yelp'
};
Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default Navbar;
