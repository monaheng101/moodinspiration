"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation' 
import {  Noto_Sans } from "next/font/google";
import { randomVerse } from './Dashboard';
import Button from './Button';
import { angryVerses, happyVerses, jealousyVerses, fearVerses, sadVerses } from '@/lib/data';


const notosans = Noto_Sans({ subsets: ['latin'], weight: ['400'] })

export default function Verses() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const myMood = searchParams.get('myMood')

  let correctArray = []

  if (myMood==="Angry") {
    correctArray=angryVerses
  } else if (myMood==="Happy"){
    correctArray=happyVerses
  }else if (myMood==="Sad"){
    correctArray=sadVerses
  }else if (myMood==="Afraid"){
    correctArray=fearVerses
  }else if (myMood==="Jealous"){
    correctArray=jealousyVerses
  }
    return (

        <div className="flex  flex-col justify-center mb-4 flex-nowrap">
          <div className="flex flex-col flex-1 space-y-2 content-center mb-6 h-screen justify-center bg-sky-50 p-3 ">
            <h4 className={'text-2xl sm:text-3xl md:text-5xl text-center align-middle p-12 ' + notosans.className}>
              {randomVerse(correctArray)}
            </h4>
          </div>
          <div className="flex justify-center py-2 sm:py-3">
            <div onClick={() => router.back()} >
             <Button text="Click here to go back"/>
            </div>     
          </div>
           
          </div>
      
      
  
    )


}
