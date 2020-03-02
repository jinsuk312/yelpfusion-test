import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Businesses from './components/businesses/Businesses';
import Search from './components/businesses/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Business from './components/businesses/Business';
import axios from 'axios';
import YelpState from './context/yelp/YelpState';
require('dotenv').config();
const App = () => {
	const [businesses, setBusinesses] = useState([]);
	const [business, setBusiness] = useState({});
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);

	const getBusiness = async id => {
		setLoading(true);

		const res = await axios
			.get(
				`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`,
				{
					headers: {
						Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
					}
				}
			)
			.then(res => {
				setBusiness(res.data);
				setLoading(false);
			})
			.catch(err => {
				console.error(err);
			});
	};

	const clearBusinesses = () => {
		setBusinesses([]);
		setLoading(false);
	};

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
										<Search
											clearBusinesses={clearBusinesses}
											showClear={businesses.length > 0 ? true : false}
											setAlert={showAlert}
										/>
										<Businesses loading={loading} businesses={businesses} />
									</Fragment>
								)}
							/>
							<Route exact path="/about" component={About} />
							<Route
								exact
								path="/user/:id"
								render={props => (
									<Business
										{...props}
										getBusiness={getBusiness}
										business={business}
										loading={loading}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		</YelpState>
	);
};

export default App;
