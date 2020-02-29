import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearBusinesses: PropTypes.func.isRequired
	};
	state = {
		text: ''
	};
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
		// this will target the name attr of inputs
		// now its a reuseable "onChange" for multiple inputs
	};
	// since using an arrow function theres no need to bind(this)
	onSubmit = e => {
		e.preventDefault();
		this.props.searchUsers(this.state.text);
		this.setState({ text: '' });
	};
	// once someone submits form it calls props.searchUsers
	// when it fires call this.searchUsers
	// which makes a request, which makes states the response
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit} action="" className="form">
					<input
						type="text"
						name="text"
						value={this.state.text}
						placeholder="Search Naperville Businesses"
						onChange={this.onChange}
					/>
					<input type="submit" value="Search" className="btn" />
				</form>
				<button className="clear" onClick={this.props.clearBusinesses}>
					Clear
				</button>
			</div>
		);
	}
}

export default Search;
