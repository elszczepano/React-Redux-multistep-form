import React from 'react';
import styled from 'styled-components';

const P = styled.p`
	text-align: center;
	font-weight: ${({theme}) => theme.font.bold}
	color: ${({theme}) => theme.colors.primaryRed}
	margin: 0;
`;

const ErrorField = ({message}) => {
	return (
		<P>{message}</P>
	);
};

export default ErrorField;