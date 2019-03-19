import React, {Component} from 'react';
import styled from 'styled-components';
import RegisterIcon from './RegisterIcon';

const Container = styled.div`
	display: flex;
	justify-content: space-around;
`;

class RegisterProgressTracker extends Component {
	render() {
		return (
			<Container>
				<RegisterIcon icon="user" completed={false}/>
				<RegisterIcon icon="file-alt" completed={false}/>
				<RegisterIcon icon="check" completed={false}/>
			</Container>
		);
	}
}

export default RegisterProgressTracker;