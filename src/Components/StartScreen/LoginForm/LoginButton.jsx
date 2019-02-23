import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color: ${({backgroundColor}) => backgroundColor};
	border-radius: 10px;
	border: none;
	font-size: 18px;
	outline: none;
	padding: 1rem .7rem; 
	color: #fff;
	font-weight: 300;
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
			backgroundColor={backgroundColor ? backgroundColor : '#2E3F8D'}
			backgroundColorHover={backgroundColorHover ? backgroundColorHover : ''}
			type={type}>
			{text}
		</Button>
	);
};

export default LoginButton;