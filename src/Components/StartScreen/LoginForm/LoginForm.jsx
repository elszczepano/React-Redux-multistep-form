import React, {Component} from 'react';
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
				<LoginButton backgroundColor={({theme}) => theme.colors.primaryBlue} backgroundColorHover={({theme}) => theme.colors.primaryDarkBlue} type="submit" text="Sign in"/>
				<LoginButton onClick={this.props.switchMode} backgroundColor={({theme}) => theme.colors.primaryGreen} backgroundColorHover={({theme}) => theme.colors.primaryDarkGreen} type="button" text="Create new account"/>
				{this.state.errorMessage ? <LoginErrorMessage message={this.state.errorMessage}/> : null}
			</Container>
		);
	}
}

export default LoginForm;