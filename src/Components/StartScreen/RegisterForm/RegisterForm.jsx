import React, {Component} from 'react';
import styled from 'styled-components';
import RegisterProgressTracker from './RegisterProgressTracker';
import StepOne from './Steps/StepOne';

const Container = styled.form`
	display: grid;
	grid-template-rows: 1fr;
	grid-row-gap: 1rem;
	padding: 0 1.5rem;
`;

class RegisterForm extends Component {
	render() {
		return (
			<Container>
				<RegisterProgressTracker/>
				<StepOne/>
			</Container>
		);
	}
}

export default RegisterForm;