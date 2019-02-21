import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color: ${props => props.backgroundColor};
	border-radius: 10px;
	border: none;
	font-size: 18px;
	outline: none;
	padding: 1rem .7rem; 
	color: #fff;
	font-weight: 300;
	cursor: pointer;
	transition: all .3s; 
	:hover {
		transform: scale(1.03);
		background-color: ${props => props.backgroundColorHover};
	}
`;


const LoginButton = ({type, text, backgroundColor, backgroundColorHover}) => {
	return (
		<Button
			backgroundColor={backgroundColor ? backgroundColor : '#2E3F8D'}
			backgroundColorHover={backgroundColorHover ? backgroundColorHover : ''}
			type={type}>
			{text}
		</Button>
	);
};

export default LoginButton;
