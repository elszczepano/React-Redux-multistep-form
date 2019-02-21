import React, { Component } from 'react';
import LoginForm from '../Components/StartScreen/LoginForm/LoginForm';
import StartScreenFooter from '../Components/StartScreen/StartScreenFooter';

class StartScreen extends Component {
	render() {
		return (
			<>
				<LoginForm/>
				<StartScreenFooter/>
			</>
		);
	}
}

export default StartScreen;