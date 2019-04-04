import React, {Component} from 'react';
import styled from 'styled-components';
import RegisterButton from '../RegisterButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import RegisterFileUpload from '../RegisterFileUpload';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 25rem;
	margin-top: 3rem;
`;
const Icon = styled(FontAwesomeIcon)`
	width: 100% !important;
    font-size: 140px;
    margin-top: 40px;
   	margin-bottom: 70px;
	color: ${({theme}) => theme.colors.grey};
`;

class StepThree extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 3
		};
	}
	render() {
		return (
			<Container>
				<Icon icon='user-circle' />
				<RegisterFileUpload/>
				<RegisterButton verifyStep={this.props.sendRegisterRequest} step={this.state.step}/>
			</Container>
		);
	}
}

export default StepThree;