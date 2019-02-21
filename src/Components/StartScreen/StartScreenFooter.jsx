import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
	position: absolute;
	bottom: 0;
	text-align: center;
	width: 100%;
	padding: 1rem 0;
	font-style: italic;
	color: #E3E3E3;
	border-top: 1px solid #E9E9E9; 
	letter-spacing: 2px;
	font-size: 12px;
`;

const StartScreenFooter = () => {
	return (
		<Footer>
			FindMates | Copyright <sup>&copy;</sup> 2019
		</Footer>
	);
};

export default StartScreenFooter;