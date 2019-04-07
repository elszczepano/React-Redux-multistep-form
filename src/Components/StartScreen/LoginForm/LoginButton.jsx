import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	font-family: 'Lato', sans-serif;
	background-color: ${({backgroundColor}) => backgroundColor};
	border: none;
	font-size: 18px;
	outline: none;
	padding: 1rem .7rem;
	color: ${({theme}) => theme.colors.white};
	cursor: pointer;
	transition: all .3s; 
	box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
	:hover {
		transform: scale(1.03);
		background-color: ${({backgroundColorHover}) => backgroundColorHover};
	}
`;

const LoginButton = ({type, text, backgroundColor, backgroundColorHover, onClick}) => {
	return (
		<Button
			onClick={onClick}
			backgroundColor={backgroundColor ? backgroundColor : ({theme}) => theme.colors.primaryBlue}
			backgroundColorHover={backgroundColorHover ? backgroundColorHover : ''}
			type={type}>
			{text}
		</Button>
	);
};

export default LoginButton;