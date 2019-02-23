import React from 'react';
import styled from 'styled-components';

const Message = styled.p`
	margin-top: 2rem;
	color: #D42222;
	font-weight: bold;
	font-size: 16px;
	text-align: center;
`;

const LoginErrorMessage = ({message}) => {
	return (
		<Message>{message}</Message>
	);
};

export default LoginErrorMessage;