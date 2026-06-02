import React, {useContext,createContext,useState} from 'react'


const ThemeContext = createContext({theme:'',changeTheme:()=>{}})

const useThemeContext = ()=>useContext(ThemeContext)

export const ThemeContextProvider = ({children}:any)=>{
    const [theme,setTheme] = useState('light')
    const changeTheme = ()=>{
        let t = theme == 'dark' ? 'light' : 'dark'
        setTheme(t)
        console.log(t,":::::: theme changed ::::")
    }
    return (
        <ThemeContext.Provider value={{theme,changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default useThemeContext;

