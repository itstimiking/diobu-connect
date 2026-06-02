import useTheme from '@/HOC/theme'
import { Button } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const featuredPerson = {
    fullname: 'Mrs Diobu Pickin',
    position: 'Minister of commerce and stomach infrastructure',
    image:'/images/ghetto_woman.jpg',
    post:{
        title:"From Diobu to the Diaspora: Building Community",
        summary: 'Diobu Connect Heritage celebrates the resilience and success of people raised in Diobu. We connect accomplished members across the world to mentor, invest in, and give back to the community that raised them.'
    }
}

const Featured = () => {
    return (
        <section className='w-full background z-10 relative flex justify-center'>
            <div className='container md:flex min-h-[500px]'>
                <div className='flex flex-1 bg-slate-200 justify-center min-h-[500px]'>
                    <div className='w-[90%] p-5 -mt-10 min-h-full background object-bottom overflow-hidden relative'>
                        <div className='w-full h-full relative'>

                            <Image src={featuredPerson.image} fill className='object-cover object-center' alt={featuredPerson.fullname} />
                        </div>
                        <div className='absolute bottom-20 min-w-[40%]' >
                            <div className='relative w-full h-gull p-4 z-0'>
                                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10' />
                                <div className='relative z-20'>

                                <h3 className='text-2xl font-black text-gray-100'>
                                    {featuredPerson.fullname}
                                </h3>
                                <p className='font-bold text-gray-200'>
                                    {featuredPerson.position}
                                </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='flex flex-1 justify-center items-center min-h-[500px]'>
                    <div className='flex flex-col gap-10 p-10'>
                        <h2 className='text-3xl md:text-5xl font-black'>
                            Featured Post
                        </h2>

                        <div className='flex flex-col gap-2'>
                            <h3 className='text-xl font-bold'>
                                {featuredPerson.post.title}
                            </h3>   
                            <p>
                                {featuredPerson.post.summary}
                            </p>
                            <span className='text-xs'>Author: {featuredPerson.fullname}</span>
                            <div className='flex flex-col pt-10'>
                                <div className='flex flex-wrap gap-10'>
                                <Link href='/blog/4'>
                                    <Button
                                        text="Read more..."
                                        bg='bg-red-600'
                                    />
                                </Link>
                                <Link href='/blog'>
                                <Button
                                    text='All Featured Post'
                                />
                                </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured