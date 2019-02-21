import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StartScreen from './Containers/StartScreen';

class App extends Component {
	render() {
		return (
			<Router>
				<Route exact path="/" component={StartScreen} />
			</Router>
		);
	}
}

export default App;