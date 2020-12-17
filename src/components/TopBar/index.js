import React, { useContext } from 'react'
import { Header } from './styles'
import { ThemeContext } from "../../contexts/ThemeStore";

import moon from './images/icon-moon.svg'
import sun from './images/icon-sun.svg'

const TopBar = () => {
	
	const { theme, switchTheme } = useContext(ThemeContext);

  

	return(
		<Header>
          <h1>TODO</h1>
          {theme === "dark" 
            ? <img src={sun} alt="" onClick={() => switchTheme("light")}/>
            : <img src={moon} alt="" onClick={() => switchTheme("dark")}/>
          }
     </Header>
		)
}

export default TopBar