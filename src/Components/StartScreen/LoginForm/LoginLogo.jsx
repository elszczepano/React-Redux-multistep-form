import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/FindMates_logo.png';

const Img = styled.img`
	width: 50%;
	display: block;
	margin: 0 auto;
	user-select: none;
`;

const LoginLogo = () => {
	return (
		<>
			<Img src={logo} alt=""/>
		</>
	);
};

export default LoginLogo;