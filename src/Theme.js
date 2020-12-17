import React, { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "./contexts/ThemeStore";
import BgMobileDark from './images/bg-mobile-dark.jpg'
import BgMobileLight from './images/bg-mobile-light.jpg'

import BgDesktopDark from './images/bg-desktop-dark.jpg'
import BgDesktopLight from './images/bg-desktop-light.jpg'


const themes = {
	dark:{
		backgroundColor: "#161722",
		backgroundColorDiv: "#25273c",
		border: "#393A4C",
		backgroundImg:{
			mobile:  `${BgMobileDark}`,
			desktop: `${BgDesktopDark}`,
		},

		text:{
			primary: "#cacde8",
			secundary: "#777a92",
			third: "#4d5066",
		},

		backgroundGradiente: "linear-gradient(hsl(280, 87%, 65%), hsl(192, 100%, 67%))"


	},

	light: {
		backgroundColor: "#E4E5F1",
		backgroundColorDiv: "#ffffff",
		backgroundImg:{
			mobile: BgMobileLight,
			desktop: BgDesktopLight,
		},

		border: "#D2D3DB",

		text:{
			primary: "#446",
			secundary: "#9394a5ff",
			third: "#d2d3db",
		},

		backgroundGradiente: "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))"



	}
}


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    transition: all 0.5s;
  }	

  ul,
  li{
  	transition: none;
  }
  `;

 const Theme = ({ children }) => {
 	const { theme } = useContext(ThemeContext)
 	return(
 		  <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
 		)
 }

 export default Theme;