import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import {faUser, faFileAlt, faEye, faEyeSlash, faUserCircle, faFileImage, faLaughBeam} from '@fortawesome/free-solid-svg-icons';
import StartScreen from './Containers/StartScreen';
library.add(faUser, faFileAlt, faEye, faEyeSlash, faUserCircle, faFileImage, faLaughBeam);

const store = createStore(rootReducer, composeWithDevTools());

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Route exact path="/" component={StartScreen} />
				</Router>
			</Provider>
		);
	}
}

export default App;