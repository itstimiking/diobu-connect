'use client'

import { redirect } from 'next/navigation';
import {useEffect} from 'react'

export default function Index() {
  useEffect(()=>{
    if(true){
      redirect('/home')
    }
  })
  return (
    <main className="flex w-full h-screen justify-center items-center">
      <p>Loading...</p>
    </main>
  );
}
