import React, { Component } from 'react';
import LoginForm from '../Components/StartScreen/LoginForm/LoginForm';
import StartScreenFooter from '../Components/StartScreen/StartScreenFooter';
import StartScreenLogo from '../Components/StartScreen/StartScreenLogo';

class StartScreen extends Component {
	render() {
		return (
			<>
				<StartScreenLogo/>
				<LoginForm/>
				<StartScreenFooter/>
			</>
		);
	}
}

export default StartScreen;