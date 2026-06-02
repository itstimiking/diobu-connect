import React from 'react'

const SubPageBackground = ({ children }:any) => {
    return (
        <section className='w-screen background z-10 relative flex justify-center'>
            <div className='container md:flex min-h-[500px]'>
                <div className='flex flex-1 bg-slate-200 justify-center min-h-[500px]'>
                    <div className='w-[90%] p-5 -mt-10 min-h-full background object-bottom overflow-hidden relative'>
                        <div className='w-full'>
                           {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubPageBackground