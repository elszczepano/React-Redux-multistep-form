import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RegisterField from '../RegisterField';
import RegisterButton from '../RegisterButton';
import ErrorField from '../../ErrorField';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 21rem;
	margin-top: 3rem;
`;
const FieldsContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	grid-row-gap: 2rem;
`;

class StepOne extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			name: '',
			email: '',
			birthDate: '',
			errors: {
				name: '',
				email: '',
				birthDate: ''
			}
		};
	}

	verifyStepOne = event => {
		event.preventDefault();


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