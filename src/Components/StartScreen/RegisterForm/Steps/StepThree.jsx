import React, {Component} from 'react';
import styled from 'styled-components';
import RegisterButton from '../RegisterButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import RegisterFileUpload from '../RegisterFileUpload';
import ErrorField from '../../ErrorField';
import UploadedAvatar from '../UploadedAvatar';
import PropTypes from 'prop-types';

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

class StepThree extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 3,
			avatar: '',
			avatarError: ''
		};

		this.getAvatar = this.getAvatar.bind(this);
	}

	async getAvatar(event) {
		const validTypes = ['image/jpeg', 'image/png'];
		const avatar = await event.target.files[0];
		if(!validTypes.includes(avatar.type)) {
			this.setState({
				avatarError: 'Invalid file type.'
			});

			return;
		}

		this.setState({
			avatarError: '',
			avatar: window.URL.createObjectURL(avatar)
		});
	};

	verifyStepThree = () => {
		if(!this.state.avatar) {
			this.setState({
				avatarError: 'This field cannot be empty.'
			});

			return;
		}

		this.props.incrementStep();
	};

	render() {
		return (
			<Container>
				{this.state.avatar ? <UploadedAvatar image={this.state.avatar} /> : <Icon icon='user-circle' />}
				{this.state.avatarError ? <ErrorField message={this.state.avatarError} /> : null }
				<RegisterFileUpload getAvatar={this.getAvatar}/>
				<RegisterButton verifyStep={this.verifyStepThree} step={this.state.step}/>
			</Container>
		);
	}
}

StepThree.propTypes = {
	incrementStep: PropTypes.func.isRequired
};

export default StepThree;