'use client'
import React,{useState} from 'react'


const useTheme = ()=>{
    const [theme,setTheme] = useState('light')

    const changeTheme = ()=>{
        let t = theme == 'dark' ? 'light' : 'dark'
        setTheme(t)
        console.log(t,":::::: theme changed ::::")
    }
    return {
        theme,
        changeTheme
    }
}

export default useTheme;