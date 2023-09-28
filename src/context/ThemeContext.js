

import {createContext,useContext,useState} from 'react'

 const ThemeContext = createContext()

 export const ThemeContextProvider = ({children})=>{
    const [dark,setDark]=useState(false)

    const toggleTheme=()=>{
        setDark(!dark)
    }
   

    return (
        <ThemeContext.Provider value={{dark,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
 }

 export const useThemeContext = ()=>useContext(ThemeContext);