'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'Events', href: '/events' },
  { label: 'Blog', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const TopNavComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showFloating, setShowFloating] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    let lastScrollY = 0

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 80) {
        // Original nav is off screen
        // Show only when scrolling down, hide when scrolling up
        setShowFloating(currentScrollY > lastScrollY)
      } else {
        // Original nav is in view — hide floating nav
        setShowFloating(false)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navContent = () => (
    <div className='container flex justify-between items-center h-full px-4'>
      {/* Logo */}
      <div className='text-4xl font-extrabold'>
        <Link href='/home'>
          Diobu <span className='text-slate-200'>Connect</span>
        </Link>
      </div>

      {/* Desktop Nav Links */}
      <div className='hidden md:flex flex-1 justify-end'>
        <div className='flex justify-between sm:gap-5 md:gap-12 text-xl'>
          {navLinks.map((link) => (
            <div key={link.href} className='w-20 flex justify-center'>
              <Link href={link.href} className='top-nav'>
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMenu}
        className='md:hidden flex items-center justify-center text-gray-50 z-50'
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className='fixed inset-0 z-40'>
          <div
            className='absolute inset-0 bg-black/70 backdrop-blur-sm'
            onClick={closeMenu}
          />
          <div className='absolute top-0 right-0 h-full w-72 bg-purple-950 shadow-2xl animate-slide-in'>
            <div className='flex flex-col pt-24 px-8 gap-2'>
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`
                    text-xl text-gray-200 hover:text-purple-400 
                    font-medium py-3 border-b border-purple-800/40
                    transition-all duration-300
                    animate-fade-in
                  `}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <>
      {/* Original nav — absolute, sits at top of the page overlaying the hero */}
      <nav
        className={`
          absolute top-0 left-0 w-full h-20
          flex items-center justify-center
          text-gray-50 z-50 bg-transparent
        `}
      >
        {navContent()}
      </nav>

      {/* Floating nav — fixed, only shows when original nav is scrolled off screen */}
      <nav
        className={`
          fixed top-0 left-0 w-full h-20
          flex items-center justify-center
          text-gray-50 z-50
          bg-purple-950 shadow-lg
          transition-transform duration-300
          ${showFloating ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        {navContent()}
      </nav>

      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  )
}

export default TopNavComponent