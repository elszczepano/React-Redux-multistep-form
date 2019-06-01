import React, {Component} from 'react';
import styled from 'styled-components';
import RegisterProgressTracker from './RegisterProgressTracker';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';
import StepFour from './Steps/StepFour';

const Container = styled.form`
	display: grid;
	grid-template-rows: 1fr;
	grid-row-gap: 1rem;
	padding: 0 1.5rem;
`;

class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentStep: 1
		};
	}

	renderStep = () => {
		switch(this.state.currentStep) {
		case 2:
			return <StepTwo incrementStep={this.incrementStep}/>;
		case 3:
			return <StepThree incrementStep={this.incrementStep}/>;
		case 4:
			return <StepFour/>;
		default:
			return <StepOne incrementStep={this.incrementStep}/>;
		}
	};

	incrementStep = () => {
		this.setState({
			currentStep: this.state.currentStep + 1
		});
	};

	render() {
		return (
			<Container>
				<RegisterProgressTracker currentStep={this.state.currentStep}/>
				{this.renderStep()}
			</Container>
		);
	}
}

export default RegisterForm;