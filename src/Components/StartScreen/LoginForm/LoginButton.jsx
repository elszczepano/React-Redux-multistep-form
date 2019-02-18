import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	background-color: #2E3F8D;
	border-radius: 10px;
	border: none;
	font-size: 18px;
	outline: none;
	padding: 1rem .7rem; 
	color: #fff;
	font-weight: 300;
	margin-top: 3rem;
	cursor: pointer;
	:hover {
		background-color: #fff;
	}
`;


const LoginSubmit = ({type, text}) => {
	return (
		<Button type={type}>{text}</Button>
	);
};

export default LoginSubmit;