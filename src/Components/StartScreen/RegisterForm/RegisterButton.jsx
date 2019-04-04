import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
	font-family: 'Lato', sans-serif;
	background-color: ${({theme}) => theme.colors.primaryBlue};
	border-radius: 10px;
	border: none;
	font-size: 18px;
	outline: none;
	padding: 1rem .7rem; 
	color: ${({theme}) => theme.colors.white};
	cursor: pointer;
	transition: all .3s; 
	box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
	&:hover {
		transform: scale(1.03);
		background-color: ${({theme}) => theme.colors.primaryDarkBlue};
	}
`;

const RegisterButton = ({step, verifyStep}) => {
	return (
		<Button onClick={verifyStep}>{step === 3 ? 'Register' : 'Next'}</Button>
	);
};

RegisterButton.propTypes = {
	step: PropTypes.number.isRequired,
	verifyStep: PropTypes.func
};

export default RegisterButton;