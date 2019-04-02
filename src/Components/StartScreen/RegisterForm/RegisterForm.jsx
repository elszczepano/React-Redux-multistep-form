import React, {Component} from 'react';
import styled from 'styled-components';
import RegisterProgressTracker from './RegisterProgressTracker';
import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';
import StepThree from './Steps/StepThree';

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
			currentStep: 1,
			finishedStep: 1
		};
	}
	renderStep = () => {
		switch(this.state.currentStep) {
		case 2:
			return <StepTwo/>;
		case 3:
			return <StepThree/>;
		default:
			return <StepOne verifyStepOne={this.verifyStepOne}/>;
		}
	};
	verifyStepOne = e => {
		e.preventDefault();
		//TODO validate step one fields
		this.setState({
			currentStep: 2,
			finishedStep: 2
		});
	};
	render() {
		return (
			<Container>
				<RegisterProgressTracker currentStep={this.state.currentStep} finishedStep={this.state.finishedStep}/>
				{this.renderStep()}
			</Container>
		);
	}
}

export default RegisterForm;