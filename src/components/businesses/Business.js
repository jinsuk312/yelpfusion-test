import React, { Component, Fragment } from 'react';

class Business extends Component {
	componentDidMount() {
		this.props.getBusiness(this.props.match.params.id);
	}
	render() {
		const { name } = this.props;
		console.log(name);
		const { loading } = this.props;
		return (
			<Fragment>
				<h1>{name}</h1>
			</Fragment>
		);
	}
}

export default Business;
