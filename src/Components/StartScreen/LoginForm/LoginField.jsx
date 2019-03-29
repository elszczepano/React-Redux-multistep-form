import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  	:last-of-type {
  		margin-bottom: 2rem;
  	}
`;

class LoginField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}
	handleChange = (e) => {
		this.setState({
			value: e.target.value
		});
	};
	render() {
		const {name, type, placeholder, id} = this.props;
		return (
			<Input onChange={this.handleChange} name={name} id={id} type={type} placeholder={placeholder}/>
		);
	}
}

LoginField.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default LoginField;