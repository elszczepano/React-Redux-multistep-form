import React, {Component} from 'react';
import RegisterField from '../RegisterField';
import RegisterButton from '../RegisterButton';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
			birthDate: ''
		};
	}
	handleChange = e => {
		this.setState({[e.target.id]: e.target.value});
	};
	render() {
		return (
			<Container>
				<FieldsContainer>
					<RegisterField handleChange={this.handleChange} type='text' placeholder='Your name' id='name'/>
					<RegisterField handleChange={this.handleChange} type='email' placeholder='Your email' id='email'/>
					<RegisterField handleChange={this.handleChange} type='date' placeholder='Your birth date' id='birthDate'/>
				</FieldsContainer>
				<RegisterButton verifyStep={this.props.verifyStepOne} step={this.state.step}/>
			</Container>
		);
	}
}

StepOne.propTypes = {
	verifyStepOne: PropTypes.func.isRequired
};

export default StepOne;