import React, { Component, Fragment } from 'react';

class Business extends Component {
	componentDidMount() {
		this.props.getBusiness(this.props.match.params.id);
	}
	render() {
		const {
			name,
			image_url,
			phone,
			rating,
			location,
			url
		} = this.props.business;
		console.log(this.props.business);
		const { loading } = this.props;
		return (
			<Fragment>
				<h1>{name}</h1>
				<img src={image_url} alt="business image" />
				<p>Phone: {phone}</p>
				<p>Rating: {rating}</p>
				<p>
					Website: <a href={url}>Link</a>
				</p>
			</Fragment>
		);
	}
}

export default Business;
