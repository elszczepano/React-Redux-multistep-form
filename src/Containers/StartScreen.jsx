import React, {Component} from 'react';
import LoginForm from '../Components/StartScreen/LoginForm/LoginForm';
import StartScreenFooter from '../Components/StartScreen/StartScreenFooter';
import StartScreenLogo from '../Components/StartScreen/StartScreenLogo';
import RegisterForm from '../Components/StartScreen/RegisterForm/RegisterForm';
import Layout from '../layout/Layout';

class StartScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			registerMode: false
		};
	};
	switchMode = () => {
		this.setState({
			registerMode: !this.state.registerMode
		});
	};
	render() {
		return (
			<Layout>
				<StartScreenLogo/>
				{this.state.registerMode ? <RegisterForm/> : <LoginForm switchMode={this.switchMode}/>}
				<StartScreenFooter/>
			</Layout>
		);
	}
}

export default StartScreen;