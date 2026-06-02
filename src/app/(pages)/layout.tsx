'use client'
import { Footer, TopNav } from '@/components'
import { ThemeContextProvider } from '@/context/Theme/ThemeContext'
import React from 'react'
import ThemeWrapper from '../../context/Theme/ThemeWrapper'

const PagesLayout = ({ children }: any) => {
  return (
    <ThemeContextProvider>
      <ThemeWrapper>
          <TopNav />
          <section>
            {children}
          </section>
          <Footer />
      </ThemeWrapper>
    </ThemeContextProvider>
  )
}

export default PagesLayout
