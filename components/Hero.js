import React from 'react'
import { Fugaz_One } from "next/font/google";
import Button from './Button';
import Link from 'next/link';

const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] })


export default function Hero() {
  return (
    <div className='py-4 md:py-10 flex flex-col gap-8  sm:gap-10 '>
      <h1 className={'text-5xl sm:text-text-6xl md:text-7xl text-center ' + fugaz.className}><span className='textGradient'>Bible Inspiration</span> tracks your <span className='textGradient'>daily</span> mood!</h1>
      <p className='text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]'>Select your current mood to learn a recomended <span className='font-semibold'>Bible Verse for your inspiration.</span></p>
      <div className='w-fit mx-auto'>
        <Link href={'/dashboard'}>
          <Button text="Continue"/>
        </Link>
        
      </div>
    </div>
  )
}
