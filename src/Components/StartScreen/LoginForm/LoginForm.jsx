import React, { Component } from 'react';
import styled from 'styled-components';
import LoginField from './LoginField';
import LoginButton from './LoginButton';
import LoginErrorMessage from './LoginErrorMessage';

const Container = styled.form`
	display: grid;
	grid-template-rows: 1fr;
	grid-row-gap: 1rem;
	padding: 0 1.5rem;
	margin-bottom: 8rem;
`;

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errorMessage: ''
		};
	};
	render() {
		return (
			<Container>
				<LoginField name="email" type="email" placeholder="Email" id="email"/>
				<LoginField name="password" type="password" placeholder="Password" id="password"/>
				<LoginButton backgroundColor="#2E3F8D" backgroundColorHover="#1C4E7C" type="submit" text="Sign in"/>
				<LoginButton onClick={this.props.switchMode} backgroundColor="#226D4F" backgroundColorHover="#115C3E" type="button" text="Create new account"/>
				{ this.state.errorMessage ? <LoginErrorMessage message={this.state.errorMessage}/> : null }
			</Container>
		);
	}
}

export default LoginForm;