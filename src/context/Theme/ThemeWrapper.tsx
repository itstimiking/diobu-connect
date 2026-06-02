'client'
import useThemeContext from '@/context/Theme/ThemeContext'
import React from 'react'

const ThemeWrapper = ({children}:any) => {
    const {theme} = useThemeContext()
  return (
    <div className={`main-layout ${theme}`}>
        {children}
    </div>
  )
}

export default ThemeWrapper