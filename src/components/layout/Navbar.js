import React, { Component } from 'react';

export class Navbar extends Component {
	render() {
		return (
			<nav>
				<h1>
					<i className="fab fa-yelp" /> {this.props.title}
				</h1>
			</nav>
		);
	}
}

export default Navbar;
