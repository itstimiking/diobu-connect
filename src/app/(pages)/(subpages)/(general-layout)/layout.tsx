'use client'
import React from 'react'
import PageHeader from '@/components/PageHeader'
import SubPageBackground from '../components/SubPageBackground'

const PagesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <PageHeader />
      <SubPageBackground>
      {children}
      </SubPageBackground>
    </>
  )
}

export default PagesLayout