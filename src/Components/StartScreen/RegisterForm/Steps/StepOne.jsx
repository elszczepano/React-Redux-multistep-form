import React, {Component} from 'react';
import RegisterField from '../RegisterField';
import RegisterButton from '../RegisterButton';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 45vh;
	margin-top: 3rem;
`;
const FieldsContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	grid-row-gap: 2rem;
`;

class StepOne extends Component {
	render() {
		return (
			<Container>
				<FieldsContainer>
					<RegisterField type='text' placeholder='Your name' id='firstname'/>
					<RegisterField type='email' placeholder='Your email' id='email'/>
					<RegisterField type='date' placeholder='Your birth date' id='birthdate'/>
				</FieldsContainer>
				<RegisterButton step={1}/>
			</Container>
		);
	}
}

export default StepOne;