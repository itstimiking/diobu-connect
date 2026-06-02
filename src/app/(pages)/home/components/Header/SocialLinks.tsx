'use client'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

const SocialLinks = () => {
    return (
        <div
            className={`
                w-10 h-full flex flex-col justify-end pb-5 
                items-center gap-5 absolute bottom-20 left-0 
            `}
        >
            <div className='w-1 h-10 bg-gray-100 border border-offset-6 border-white opacity-50' />
            <a href='/facebook'>
                <FaFacebook className='text-white' />
            </a>
            <a href='/twitter'>
                <FaTwitter className='text-white' />
            </a>
            <a href='/insta'>
                <FaInstagram className='text-white' />
            </a>
            <div className='w-1 h-10 bg-gray-100 border border-offset-6 border-white opacity-50' />
        </div>
    )
}

export default SocialLinks