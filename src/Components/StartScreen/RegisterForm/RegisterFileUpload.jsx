import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;
const Label = styled.label`
	background-color: ${({theme}) => theme.colors.primaryGreen};
	border-radius: 10px;
	border: none;
	font-size: 18px;
	outline: none;
	padding: 1rem .7rem;
	text-align: center;
	color: ${({theme}) => theme.colors.white};
	cursor: pointer;
	transition: all .3s; 
	box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
	:hover {
		transform: scale(1.03);
		background-color: ${({theme}) => theme.colors.primaryDarkGreen};
	}
`;

const RegisterFileUpload = () => {
	return (
		<>
			<Label htmlFor="avatar">Upload avatar</Label>
			<Input id="avatar" type="file"/>
		</>
	);
};

export default RegisterFileUpload;