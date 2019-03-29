import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faUser, faFileAlt } from '@fortawesome/free-solid-svg-icons';

import StartScreen from './Containers/StartScreen';

library.add(faCheck, faUser, faFileAlt);

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