import React, { Component } from 'react';
import LoginForm from '../Components/StartScreen/LoginForm/LoginForm';

class StartScreen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<LoginForm/>
			</>
		);
	}
}

export default StartScreen;