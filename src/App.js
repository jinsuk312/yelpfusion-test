import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar title="Naperville Businesses" />
			</div>
		);
	}
}

export default App;
