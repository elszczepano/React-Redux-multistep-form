import React, {Component} from 'react';
import styled from 'styled-components';
import RegisterField from '../RegisterField';
import RegisterButton from '../RegisterButton';
import RegisterSelect from '../RegisterSelect';
import ErrorField from '../../ErrorField';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 25rem;
	margin-top: 3rem;
`;

const FieldsContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	grid-row-gap: 1.3rem;
`;

class StepTwo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 2,
			genders: ['Male', 'Female', 'Other'],
			purposes: ['Friends', 'Dating', 'For fun', 'Sex', 'Other'],
			password: '',
			phone: '',
			gender: '',
			purpose: '',
			errors: {},
		};
	}

	verifyStepTwo = event => {
		event.preventDefault();
		const isPhoneValid = this.verifyPhone();
		const isPasswordValid = this.verifyPassword();
		const isGenderValid = this.verifyIfValidValue('gender');
		const isPurposeValid = this.verifyIfValidValue('purpose');


		if(isPhoneValid && isPasswordValid && isGenderValid && isPurposeValid) {
			this.props.incrementStep();
		}
	};

	verifyPhone = () => {
		if(this.state.phone === '') {
			this.emitEmptyFieldError('phone');
			return false;
		}

		this.setState({
			errors: Object.assign(this.state.errors, {phone: ''})
		});

		return true;
	};

	verifyPassword = () => {
		if(this.state.password === '') {
			this.emitEmptyFieldError('password');
			return false;
		}

		if(this.state.password.length < 8 ) {
			this.setState({
				errors: Object.assign(this.state.errors, {password: 'Password must have at lest 8 characters.'})
			});
			return false;
		}

		this.setState({
			errors: Object.assign(this.state.errors, {password: ''})
		});

		return true;
	};

	verifyIfValidValue = field => {
		if(this.state[field] === '') {
			this.emitEmptyFieldError(field);
			return false;
		}

		this.setState({
			errors: Object.assign(this.state.errors, {[field]: ''})
		});

		return true;
	};

	emitEmptyFieldError = field => {
		this.setState({
			errors: Object.assign(this.state.errors, {[field]: 'This field cannot be empty.'})
		});
	};

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	render() {
		return (
			<Container>
				<FieldsContainer>
					<RegisterField handleChange={this.handleChange} type='password' placeholder='Your password' id='password'/>
					{this.state.errors.password ? <ErrorField message={this.state.errors.password} /> : null }
					<RegisterField handleChange={this.handleChange} type='phone' placeholder='Your phone' id='phone'/>
					{this.state.errors.phone ? <ErrorField message={this.state.errors.phone} /> : null }
					<RegisterSelect handleChange={this.handleChange} id='gender' placeholder='Your gender' values={this.state.genders}/>
					{this.state.errors.gender ? <ErrorField message={this.state.errors.gender} /> : null }
					<RegisterSelect handleChange={this.handleChange} id='purpose' placeholder='I am here for...' values={this.state.purposes}/>
					{this.state.errors.purpose ? <ErrorField message={this.state.errors.purpose} /> : null }
				</FieldsContainer>
				<RegisterButton verifyStep={this.verifyStepTwo} step={this.state.step}/>
			</Container>
		);
	}
}

export default StepTwo;