'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

const PageHeader = () => {
  const pathname = usePathname()
  return (
    <div 
        className={`
            flex w-screen h-[50vh]
            relative z-0 overflow-hidden
        `}
    >
        <div
            className={`
                absolute top-0 left-0 z-0
                w-full h-full bg-center bg-cover
                bg-[url(/images/ghetto_kids_school.jpg)]
                bg-black bg-blend-screen bg-no-repeat
            `}
        >
        </div>

        <div 
            className={`
                flex absolute z-0 w-full 
                h-full opacity-80 
                justify-between
            `}
        >
            <div className='flex flex-1 bg-purple-900'>
            </div>
            <div className='flex flex-1 bg-black'>
            </div>
        </div>

       
            <div className='container flex relative h-full justify-center items-center'>
                <p className='capitalize text-3xl font-bold text-white'>
                    {pathname.substring(1).split('/')[0]}
                </p>
            </div>
    </div>
  )
}

export default PageHeader