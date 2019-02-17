import React, { Component } from 'react';
import LoginField from './LoginField';

class LoginForm extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<>
				<LoginField type="email"/>
				<LoginField type="password"/>
			</>
		);
	}
}

export default LoginForm;