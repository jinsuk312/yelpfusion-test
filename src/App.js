import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Businesses from './components/businesses/Businesses';
import Search from './components/businesses/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Business from './components/businesses/Business';
import YelpState from './context/yelp/YelpState';
import AlertState from './context/alert/AlertState';

require('dotenv').config();
const App = () => {
	return (
		<YelpState>
			<AlertState>
				<Router>
					<div className="App">
						<Navbar />
						<div className="container">
							<Alert />
							<Switch>
								<Route
									exact
									path="/"
									render={props => (
										<Fragment>
											<Search />
											<Businesses />
										</Fragment>
									)}
								/>
								<Route exact path="/about" component={About} />
								<Route exact path="/user/:id" component={Business} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</YelpState>
	);
};

export default App;
