import React from 'react';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {theme} from '../utils/theme';

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		font-family: 'Lato', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
`;

const Layout = ({children}) => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyle />
				{children}
			</>
		</ThemeProvider>
	);
};

export default Layout;