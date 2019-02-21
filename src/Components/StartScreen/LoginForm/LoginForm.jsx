import React, { Component } from 'react';
import styled from 'styled-components';
import LoginField from './LoginField';
import LoginButton from './LoginButton';
import LoginLogo from './LoginLogo';

const Container = styled.form`
	display: grid;
	grid-template-rows: 1fr;
	grid-row-gap: 1rem;
	padding: 1.5rem;
`;


class LoginForm extends Component {
	render() {
		return (
			<Container>
				<LoginLogo/>
				<LoginField type="email" placeholder="Email" id="email"/>
				<LoginField type="password" placeholder="Password" id="password"/>
				<LoginButton backgroundColor="#2E3F8D" backgroundColorHover="#1C4E7C" type="submit" text="Sign in"/>
				<LoginButton backgroundColor="#226D4F" backgroundColorHover="#115C3E" type="button" text="Create new account"/>
			</Container>
		);
	}
}

export default LoginForm;