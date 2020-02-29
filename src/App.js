import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Businesses from './components/businesses/Businesses';
import Search from './components/businesses/Search';

import axios from 'axios';
require('dotenv').config();
class App extends Component {
	state = {
		businesses: [],
		loading: false
	};
	async componentDidMount() {
		axios
			.get(
				"https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location='naperville,il'",
				{
					headers: {
						Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
					}
				}
			)
			.then(res => {
				this.setState({ businesses: res.data.businesses, loading: false });
				// console.log(res.data.businesses);
			})
			.catch(err => {
				console.log('error');
			});
	}
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
	clearUsers = () => this.setState({ users: [], loading: false });
	render() {
		return (
			<div className="App">
				<Navbar />
				<Search
					searchUsers={this.searchUsers}
					clearBusinesses={this.clearBusinesses}
				/>
				<Businesses
					loading={this.state.loading}
					businesses={this.state.businesses}
				/>
			</div>
		);
	}
}
export default App;
