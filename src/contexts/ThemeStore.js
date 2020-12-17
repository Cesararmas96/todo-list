import React, { useState,useEffect } from "react";

const ThemeContext = React.createContext(); 

const ThemeStore = ({ children }) => {

  let temaInicial = localStorage.getItem('themes');
  
  if(!temaInicial){
    temaInicial = "light"
  }

  const [theme, setTheme] = useState(temaInicial)


  useEffect(() => {
   localStorage.setItem('themes', theme)
	}, [theme]);
 
  const switchTheme = (theme) => {
  	setTheme(theme); 
  }

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeStore, ThemeContext };