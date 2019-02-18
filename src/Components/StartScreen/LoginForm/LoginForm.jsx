import React, { Component } from 'react';
import LoginField from './LoginField';
import LoginButton from './LoginButton';
import styled from 'styled-components';

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
				<LoginField type="email" placeholder="Email" id="email"/>
				<LoginField type="password" placeholder="Password" id="password"/>
				<LoginButton backgroundColor="" backgroundColorHover="#1C4E7C" type="submit" text="Sign in"/>
			</Container>
		);
	}
}

export default LoginForm;