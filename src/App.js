import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Businesses from './components/businesses/Businesses';
import Search from './components/businesses/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Business from './components/businesses/Business';
import YelpState from './context/yelp/YelpState';
require('dotenv').config();
const App = () => {
	const [alert, setAlert] = useState(null);

	const showAlert = (msg, type) => {
		setAlert({ msg, type });
		setTimeout(() => setAlert(null), 4000);
	};

	return (
		<YelpState>
			<Router>
				<div className="App">
					<Navbar />
					<div className="container">
						<Alert alert={alert} />
						<Switch>
							<Route
								exact
								path="/"
								render={props => (
									<Fragment>
										<Search setAlert={showAlert} />
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
		</YelpState>
	);
};

export default App;
