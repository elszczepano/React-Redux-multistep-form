import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const IconWrapper = styled.div`
	color: ${({theme, completed}) => completed ? theme.colors.white : theme.colors.primaryBlue};
	background-color: ${({theme, completed}) => completed ? theme.colors.primaryBlue : theme.colors.white};
	border: ${({theme, completed}) => completed ? 'none' : `1px solid ${theme.colors.primaryBlue}`};
	width: 50px;
	height: 50px;
	font-size: 20px;
	border-radius: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: .3s transform;
	cursor: pointer;
	&:hover {
		transform: scale(1.05);
	}
`;

const RegisterIcon = ({icon, completed}) => {
	return (
		<IconWrapper completed={completed}>
			<FontAwesomeIcon icon={icon} />
		</IconWrapper>
	);
};

RegisterIcon.propTypes = {
	icon: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired
};

export default RegisterIcon;