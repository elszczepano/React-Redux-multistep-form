import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Input = styled.input`
	background-color: ${({theme}) => theme.colors.lightGrey};
	border-radius: 3px;
	border: none;
	font-size: 20px;
	min-height: 23px;
	outline: none;
	padding: 1rem .7rem;
	width: 100%; 
	box-sizing: border-box;
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
const Icon = styled(FontAwesomeIcon)`
	color: ${({theme}) => theme.colors.darkGrey};
	position: absolute;
	top: 35%;
	right: 5%;
`;
const Wrapper = styled.div`
	position: relative;
`;

class RegisterField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			passwordShown: false,
			type: this.props.type || 'text'
		};
	}

	handleChangeType = () => {
		this.setState({
			passwordShown: !this.state.passwordShown,
			type: this.state.passwordShown ? 'password' : 'text'
		});
	};

	render() {
		const {name, placeholder, id, handleChange} = this.props;
		return (
			<Wrapper>
				<Input onChange={handleChange} name={name} id={id} type={this.state.type} placeholder={placeholder}/>
				{this.props.type === 'password' ? <Icon onClick={this.handleChangeType} icon={this.state.passwordShown ? 'eye-slash' : 'eye'}/> : null}
			</Wrapper>
		);
	}
}

RegisterField.propTypes = {
	name: PropTypes.string,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	handleChange: PropTypes.func
};

export default RegisterField;