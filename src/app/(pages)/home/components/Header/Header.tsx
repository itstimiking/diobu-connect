import React from 'react'
import AnimatedText from './AnimatedText'
import SocialLinks from './SocialLinks'

const Header = () => {

  return (
    <div 
        className={`
            flex w-full h-screen
            relative z-0 overflow-hidden
        `}
    >
        <div
            className={`
                absolute top-0 left-0 z-0
                w-full h-screen bg-center bg-cover
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

        <div 
            className={`
                flex absolute z-0 w-full h-full 
                items-center justify-center text-gray-50
            `}>
            <div className='container flex relative h-full justify-center items-center'>
                <AnimatedText />
            </div>
        </div>

        <div className='flex absolute z-20 w-full h-full items-center justify-center text-gray-50'>
            <div className='container w-full h-full relative z-30'>
              <SocialLinks />
            </div>
        </div>
    </div>
  )
}

export default Header