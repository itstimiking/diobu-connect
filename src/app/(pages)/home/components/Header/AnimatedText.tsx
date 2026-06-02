'use client'
import React, { useState, useEffect, useCallback } from 'react'

const heading_text = [
    {text:'The sweet memories of your childhood',id:0},
    {text:'The places you loved to play at',id:1},
    {text:'The people you loved to play with',id:2},
    {text:'Connect with people who experienced the same',id:3},
]

const AnimatedText = () => {

    const [step,setStep] = useState(0)

    const changeStep = useCallback(()=>{
        setStep(prv => prv < (heading_text.length - 1) ? prv + 1 : 0)
    }, [])

    const moveToStep = (step:number)=>{
        setStep(step)
    }

    useEffect(()=>{
        const change = setInterval(changeStep,8000)
        return ()=>{
            clearInterval(change)
        }
    }, [changeStep])

    return (
        <div className='w-full h-full flex flex-col items-center justify-center relative'>
            <span
                key={step}
                className={`
                    font-black text-[3em] sm:text-[4em] 
                    md:text-[5.3em] lg:text-[6.3em] sm:w-[90%] 
                    leading-[55px] sm:leading-[65px] 
                    md:leading-[100px] text-center
                    heading-text
                `}
            >
                {heading_text[step].text}
            </span>

            <div className='w-full h-10 flex justify-center items-center gap-10 absolute bottom-20 opacity-70 z-20'>
                {heading_text.map((el, ind) => (
                    <div 
                        key={ind}
                        className={`${step === ind ? 'bg-white' : ''} w-2 h-2 rounded-full border border-offset-6 border-white transition-all duration-1000 cursor-pointer`} 
                        onClick={() => moveToStep(ind)} 
                    />
                ))}
            </div>
        </div>
    )
}

export default AnimatedText