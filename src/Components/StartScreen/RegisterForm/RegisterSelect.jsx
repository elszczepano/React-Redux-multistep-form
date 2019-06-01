import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	position: relative;
	::after {
		content: '\\25BC';
 		position: absolute;
  		top: 30%;
  		right: 0;
  		bottom: 0;
  		z-index: 99999;
  		padding: 0 1em;
  		color: ${({theme}) => theme.colors.grey};
	}
`;
const Select = styled.select`
	background-color: ${({theme}) => theme.colors.lightGrey};
	border-radius: 3px;
	border: none;
	font-size: 20px;
	min-height: 23px;
	outline: none;
	padding: 1rem .7rem;
	width: 100%; 
	color: ${({theme}) => theme.colors.grey};
	font-weight: ${({theme}) => theme.font.thin};
	transition: .3s all;
	font-family: 'Lato', sans-serif;
	appearance: none;
	::-webkit-input-placeholder {
    	color: ${({theme}) => theme.colors.darkGrey};
    	font-weight: ${({theme}) => theme.font.thin};
    	font-family: 'Lato', sans-serif;
  	}
`;

const RegisterSelect = ({values= [], placeholder, id}) => {
	return (
		<Wrapper>
			<Select name={id} id={id} defaultValue={0}>
				<option key={placeholder} value={0} disabled>{placeholder}</option>
				{values.map(value => <option key={value} value={value}>{value}</option>)}
			</Select>
		</Wrapper>
	);
};

RegisterSelect.propTypes = {
	values: PropTypes.array.isRequired,
	placeholder: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired
};

export default RegisterSelect;