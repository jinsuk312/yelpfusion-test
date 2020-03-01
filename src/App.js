import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Businesses from './components/businesses/Businesses';
import Search from './components/businesses/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Business from './components/businesses/Business';
import axios from 'axios';
require('dotenv').config();
class App extends Component {
	state = {
		businesses: [],
		business: {},
		loading: false,
		alert: null
	};
	// async componentDidMount() {
	// 	axios
	// 		.get(
	// 			"https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location='naperville,il'",
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
	// 				}
	// 			}
	// 		)
	// 		.then(res => {
	// 			this.setState({ businesses: res.data.businesses, loading: false });
	// 			// console.log(res.data.businesses);
	// 		})
	// 		.catch(err => {
	// 			console.log('error');
	// 		});
	// }
	// search businesses
	searchUsers = async text => {
		this.setState({
			loading: true
		});
		axios
			.get(
				`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search`,
				{
					headers: {
						Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
					},
					// another format for url params
					params: {
						location: 'naperville, il',
						term: `${text}`,
						distance: 0
					}
				}
			)
			.then(res => {
				this.setState({ businesses: res.data.businesses, loading: false });
				console.log(res.data.businesses);
			})
			.catch(err => {
				console.log('error');
			});
	};

	getBusiness = async id => {
		this.setState({
			loading: true
		});
		axios
			.get(
				`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`,
				{
					headers: {
						Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
					}
				}
			)
			.then(res => {
				this.setState({ business: res.data, loading: false });
			})
			.catch(err => {
				console.log('error');
			});
	};

	clearUsers = () => this.setState({ users: [], loading: false });

	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } });
		setTimeout(() => this.setState({ alert: null }), 3500);
	};

	render() {
		const { businesses, loading, business } = this.state;
		return (
			<Router>
				<div className="App">
					<Navbar />
					<div className="container">
						<Alert alert={this.state.alert} />
						<Switch>
							<Route
								exact
								path="/"
								render={props => (
									<Fragment>
										<Search
											searchUsers={this.searchUsers}
											clearUsers={this.clearUsers}
											showClear={businesses.length > 0 ? true : false}
											setAlert={this.setAlert}
										/>
										<Businesses loading={loading} businesses={businesses} />
									</Fragment>
								)}
							/>
							<Route exact path="/about" component={About} />
							<Route
								exact
								path="/business/:id"
								render={props => (
									<Business
										{...props}
										getBusiness={this.getBusiness}
										business={business}
										loading={loading}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}
export default App;
