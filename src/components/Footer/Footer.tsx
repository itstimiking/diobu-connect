'use client'
import useThemeContext from '@/context/Theme/ThemeContext'
import React from 'react'
import Link from 'next/link'
import { FiFacebook, FiTwitter, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const FooterComponent = () => {
  const { theme } = useThemeContext()

  return (
    <footer className='w-full relative z-10'>
      {/* Main footer content */}
      <div className='relative bg-purple-950 text-gray-300 overflow-hidden'>
        {/* Decorative gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-900/80 to-purple-950' />

        {/* Content */}
        <div className='relative container mx-auto px-4 py-16 md:py-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8'>
            
            {/* Brand & Description */}
            <div className='lg:col-span-1'>
              <h3 className='text-2xl font-extrabold text-white mb-4'>
                Diobu Connect Heritage
              </h3>
              <p className='text-sm leading-relaxed text-gray-400'>
                Empowering the Diobu community through connection, 
                stories, and shared experiences. Building a brighter 
                future together.
              </p>
              {/* Social Icons */}
              <div className='flex gap-4 mt-6'>
                <a
                  href='#'
                  className='w-10 h-10 rounded-full bg-purple-800/50 hover:bg-purple-600 flex items-center justify-center transition-all duration-300 text-gray-300 hover:text-white'
                  aria-label='Facebook'
                >
                  <FiFacebook size={18} />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 rounded-full bg-purple-800/50 hover:bg-purple-600 flex items-center justify-center transition-all duration-300 text-gray-300 hover:text-white'
                  aria-label='Twitter'
                >
                  <FiTwitter size={18} />
                </a>
                <a
                  href='#'
                  className='w-10 h-10 rounded-full bg-purple-800/50 hover:bg-purple-600 flex items-center justify-center transition-all duration-300 text-gray-300 hover:text-white'
                  aria-label='Instagram'
                >
                  <FiInstagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className='text-white font-semibold text-lg mb-4 relative pb-2 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-purple-500'>
                Quick Links
              </h4>
              <ul className='space-y-3'>
                {[
                  { label: 'Home', href: '/home' },
                  { label: 'Events', href: '/events' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'Gallery', href: '/gallery' },
                  { label: 'About Us', href: '/about' },
                  { label: 'Contact', href: '/contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2'
                    >
                      <span className='w-1.5 h-1.5 rounded-full bg-gray-200' />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className='text-white'>
              <h4 className='text-white font-semibold text-lg mb-4 relative pb-2 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-purple-500'>
                Contact Us
              </h4>
              <ul className='space-y-4 !text-white'>
                <li className='flex items-start gap-3 text-sm'>
                  <FiMapPin className='mt-1 shrink-0 text-white' size={16} />
                  <span className='!text-gray-400'>123 Diobu Main Road, Port Harcourt, Rivers State, Nigeria</span>
                </li>
                <li className='flex items-center gap-3 text-sm text-white'>
                  <FiPhone className='shrink-0' size={16} />
                  <span className='!text-gray-400'>+234 800 000 0000</span>
                </li>
                <li className='flex items-center gap-3 text-sm'>
                  <FiMail className='shrink-0 text-white' size={16} />
                  <span className='!text-gray-400'>info@diobuconnect.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter / Stay Connected */}
            <div>
              <h4 className='text-white font-semibold text-lg mb-4 relative pb-2 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-purple-500'>
                Stay Connected
              </h4>
              <p className='text-sm text-gray-400 mb-4'>
                Subscribe to our newsletter for the latest updates and stories from Diobu.
              </p>
              <div className='flex flex-col gap-3'>
                <input
                  type='email'
                  placeholder='Your email address'
                  className='w-full px-4 py-2.5 rounded-lg bg-purple-900/60 border border-purple-700/50 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all'
                />
                <button className='w-full px-4 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-all duration-300'>
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='bg-purple-950 border-t border-purple-800/30'>
        <div className='container mx-auto px-4 py-5'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-3'>
            <p className='text-sm text-gray-500'>
              &copy; {new Date().getFullYear()} Diobu Connect. All rights reserved.
            </p>
            <div className='flex gap-6 text-sm text-gray-500'>
              <Link href='#' className='hover:text-purple-400 transition-colors'>
                Privacy Policy
              </Link>
              <Link href='#' className='hover:text-purple-400 transition-colors'>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent