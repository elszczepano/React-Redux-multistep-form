import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
	background-color: ${({theme}) => theme.colors.lightGrey};
	border-radius: 10px;
	border: none;
	font-size: 20px;
	min-height: 23px;
	outline: none;
	padding: 1rem .7rem; 
	color: ${({theme}) => theme.colors.darkGrey};
	font-weight: ${({theme}) => theme.font.thin};
	transition: .3s all;
	::-webkit-input-placeholder {
    	color: ${({theme}) => theme.colors.grey};
    	font-weight: ${({theme}) => theme.font.thin};
    	font-family: 'Lato', sans-serif;
  	}
  	:focus {
  		font-size: 18px;
  	}
`;

const RegisterField = ({name, type, placeholder, id, handleChange}) => {
	return (
		<Input onChange={handleChange} name={name} id={id} type={type} placeholder={placeholder}/>
	);
};

RegisterField.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
};

export default RegisterField;