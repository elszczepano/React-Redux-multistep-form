import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import RegisterField from '../RegisterField';
import RegisterButton from '../RegisterButton';
import ErrorField from '../../ErrorField';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 18rem;
	margin-top: 3rem;
`;

const FieldsContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	grid-row-gap: 20px;
`;

class StepOne extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			name: '',
			email: '',
			birthDate: '',
			errors: {}
		};
	}

	verifyStepOne = event => {
		event.preventDefault();
		const isNameValid = this.verifyName();
		const isEmailValid = this.verifyEmail();
		const isBirthDateValid = this.verifyBirthDate();

		if(isNameValid && isEmailValid && isBirthDateValid) {
			this.props.incrementStep();
		}
	};

	verifyName = () => {
		if(this.state.name === '') {
			this.emitEmptyFieldError('name');
			return false;
		}

		this.setState({
			errors: Object.assign(this.state.errors, {name: ''})
		});

		return true;
	};

	verifyEmail = () => {
		const EMAIL_REGEX = new RegExp('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}');

		if(this.state.email === '') {
			this.emitEmptyFieldError('email');
			return false;
		}
		if(!EMAIL_REGEX.test(this.state.email)) {
			this.setState({
				errors: Object.assign(this.state.errors, {email: 'This is not valid email address.'})
			});
			return false;
		}

		this.setState({
			errors: Object.assign(this.state.errors, {email: ''})
		});

		return true;
	};

	verifyBirthDate = () => {
		if(this.state.birthDate === '') {
			this.emitEmptyFieldError('birthDate');
			return false;
		}
		if(moment().diff(this.state.birthDate) < 0) {
			this.setState({
				errors: Object.assign(this.state.errors, {birthDate: 'Invalid date.'})
			});
			return false;
		}

		this.setState({
			errors: Object.assign(this.state.errors, {birthDate: ''})
		});

		return true;
	};

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	emitEmptyFieldError = field => {
		this.setState({
			errors: Object.assign(this.state.errors, {[field]: 'This field cannot be empty.'})
		});
	};

	render() {
		return (
			<Container>
				<FieldsContainer>
					<RegisterField handleChange={this.handleChange} type='text' placeholder='Your name' id='name'/>
					{this.state.errors.name ? <ErrorField message={this.state.errors.name} /> : null }
					<RegisterField handleChange={this.handleChange} type='email' placeholder='Your email' id='email'/>
					{this.state.errors.email ? <ErrorField message={this.state.errors.email} /> : null }
					<RegisterField handleChange={this.handleChange} type='date' placeholder='Your birth date' id='birthDate'/>
					{this.state.errors.birthDate ? <ErrorField message={this.state.errors.birthDate} /> : null }
				</FieldsContainer>
				<RegisterButton verifyStep={this.verifyStepOne} step={this.state.step}/>
			</Container>
		);
	}
}

StepOne.propTypes = {
	incrementStep: PropTypes.func.isRequired
};

export default StepOne;