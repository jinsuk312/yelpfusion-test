import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Businesses from './components/businesses/Businesses';
import axios from 'axios';
require('dotenv').config();
console.log(process.env.REACT_APP_API_KEY);
class App extends Component {
	state = {
		businesses: []
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
				console.log(res);
			})
			.catch(err => {
				console.log('error');
			});
	}
	render() {
		return (
			<div className="App">
				<Navbar />
				<Businesses />
			</div>
		);
	}
}
export default App;
