import React, {Component} from 'react';
import styled from 'styled-components';
import RegisterField from '../RegisterField';
import RegisterButton from '../RegisterButton';
import RegisterSelect from '../RegisterSelect';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 25rem;
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
			purposes: ['Friends', 'Dating', 'For fun', 'Sex', 'Other']
		};
	}
	render() {
		return (
			<Container>
				<FieldsContainer>
					<RegisterField type='password' placeholder='Your password' id='password'/>
					<RegisterField type='phone' placeholder='Your phone' id='phone'/>
					<RegisterSelect id='gender' placeholder='Your gender' values={this.state.genders}/>
					<RegisterSelect id='purpose' placeholder='I am here for...' values={this.state.purposes}/>
				</FieldsContainer>
				<RegisterButton step={this.state.step}/>
			</Container>
		);
	}
}

export default StepTwo;