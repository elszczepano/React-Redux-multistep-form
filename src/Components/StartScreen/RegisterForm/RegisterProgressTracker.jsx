import React, {Component} from 'react';
import styled from 'styled-components';
import RegisterIcon from './RegisterIcon';
import PropTypes from 'prop-types';

const Container = styled.div`
	display: flex;
	justify-content: space-around;
`;

class RegisterProgressTracker extends Component {
	render() {
		const {currentStep} = this.props;
		return (
			<Container>
				<RegisterIcon icon="user" completed={true}/>
				<RegisterIcon icon="file-alt" completed={currentStep > 1}/>
				<RegisterIcon icon="file-image" completed={currentStep > 2}/>
			</Container>
		);
	}
}
RegisterProgressTracker.propTypes = {
	currentStep: PropTypes.number.isRequired
};

export default RegisterProgressTracker;