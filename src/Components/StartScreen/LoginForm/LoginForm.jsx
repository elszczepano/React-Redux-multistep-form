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
	${({isErrorDisplayed}) => !isErrorDisplayed ? 'margin-bottom: 8rem' : null}
`;

const ForgotPasswordLink = styled.a`
	color: ${({theme}) => theme.colors.grey};
	text-align: center;
	text-decoration: underline;
	margin-top: .5rem;
`;

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			errorMessage: ''
		};
	};

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({
			errorMessage: ''
		});

		if(this.validateLoginForm()) {
			alert('Successfully logged');
		}
	};

	validateLoginForm = () => {
		if(!this.state.email || !this.state.password) {
			this.setState({
				errorMessage: 'The email or phone number you’ve entered doesn’t match any account.'
			});
			return;
		}

		return true;
	};

	render() {

		return (
			<Container isErrorDisplayed={this.state.errorMessage} onSubmit={this.handleSubmit}>
				<LoginField handleChange={this.handleChange} name="email" type="email" placeholder="Email" id="email"/>
				<LoginField handleChange={this.handleChange} name="password" type="password" placeholder="Password" id="password"/>
				<LoginButton handleSubmit={this.handleSubmit} backgroundColor={({theme}) => theme.colors.primaryBlue} backgroundColorHover={({theme}) => theme.colors.primaryDarkBlue} type="submit" text="Sign in"/>
				<LoginButton onClick={this.props.switchMode} backgroundColor={({theme}) => theme.colors.primaryGreen} backgroundColorHover={({theme}) => theme.colors.primaryDarkGreen} type="button" text="Create new account"/>
				<ForgotPasswordLink href='/'>I don't remember my password</ForgotPasswordLink>
				{this.state.errorMessage ? <LoginErrorMessage message={this.state.errorMessage}/> : null}
			</Container>
		);
	}
}

export default LoginForm;