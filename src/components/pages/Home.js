import React, { Fragment } from 'react';
import Search from '../businesses/Search';
import Businesses from '../businesses/Businesses';

const Home = () => {
	return (
		<Fragment>
			<Search />
			<Businesses />
		</Fragment>
	);
};
export default Home;
