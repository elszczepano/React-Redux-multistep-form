import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
	background-color: #F1F1F2;
	border-radius: 10px;
	border: none;
	font-size: 20px;
	outline: none;
	padding: 1rem .7rem; 
	color: #707070;
	font-weight: 300;
	&::-webkit-input-placeholder {
    	color: #C3C3C4;
    	font-weight: 300;
    	font-family: 'Lato', sans-serif;
  	}
`;

const LoginField = ({type, placeholder, id}) => {
	return (
		<Input id={id} type={type} placeholder={placeholder}/>
	);
};

LoginField.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default LoginField;