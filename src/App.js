import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Businesses from './components/businesses/Businesses';
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
	render() {
		return (
			<div className="App">
				<Navbar />
				<Businesses
					loading={this.state.loading}
					businesses={this.state.businesses}
				/>
			</div>
		);
	}
}
export default App;
