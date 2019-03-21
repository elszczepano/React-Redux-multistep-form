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

class StepTwo extends Component {
	render() {
		return (
			<Container>
				<FieldsContainer>
					<RegisterField type='password' placeholder='Your password' id='password'/>
					<RegisterField type='phone' placeholder='Your phone' id='phone'/>
				</FieldsContainer>
				<RegisterButton step={2}/>
			</Container>
		);
	}
}

export default StepTwo;