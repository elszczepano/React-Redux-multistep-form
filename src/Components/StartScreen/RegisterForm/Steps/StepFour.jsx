import React, {Component} from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 25rem;
	margin-top: 1rem;
`;

const Icon = styled(FontAwesomeIcon)`
	width: 100% !important;
    font-size: 140px;
    margin-top: 40px;
   	margin-bottom: 70px;
	color: ${({theme}) => theme.colors.grey};
`;

const Summary = styled.p`
	text-align: center;
`;

const Bold = styled.span`
	font-weight: ${({theme}) => theme.font.bold};
	color: ${({theme}) => theme.color.primaryBlue};
`;

class StepFour extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 4,
			name: ''
		};
	}
	render() {
		return (
			<Container>
				<Icon icon='laugh-beam' />
				<Summary>
					Registration process finished!<br />
					<Bold>{this.state.name}</Bold> welcome to <Bold>FindMates</Bold> community!
				</Summary>
			</Container>
		);
	}
}

export default StepFour;