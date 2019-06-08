import React from 'react';
import styled from 'styled-components';

const Message = styled.p`
	margin-top: 1rem;
	margin-bottom: 0.5rem;
	color: ${({theme}) => theme.colors.primaryRed};
	font-weight: ${({theme}) => theme.font.bold};
	font-size: 16px;
	text-align: center;
`;

const LoginErrorMessage = ({message}) => {
	return (
		<Message>{message}</Message>
	);
};

export default LoginErrorMessage;