import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
	background-color: #F1F1F2;
	border-radius: 10px;
	border: none;
	font-size: 20px;
	min-height: 23px;
	outline: none;
	padding: 1rem .7rem; 
	color: #707070;
	font-weight: 300;
	transition: .3s all;
	::-webkit-input-placeholder {
    	color: #C3C3C4;
    	font-weight: 300;
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