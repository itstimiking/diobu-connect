'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Header from './components/Header/Header'
import Featured from './components/Featured'
import BoxesSection from './components/Boxes'
import BlogSection from './components/BlogSection'
import PrioritiesSection from './components/Priorities'
import TestimoniesSection from './components/Testimonies'

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const activeIndex = hoveredIndex ?? 1

  return (
    <>
      <Header />
      <Featured />
      <BoxesSection />
      <BlogSection  />
      <PrioritiesSection />
      <TestimoniesSection />
    </>
  )
}

export default Home
