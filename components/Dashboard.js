import React from 'react'
import { Fugaz_One } from "next/font/google";
import { dashVerses } from '@/lib/data';
import Link from 'next/link';

const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] })

export function randomVerse(arr){
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  let verse = arr[0]
  return verse;

}

export default function Dashboard() {

  const moods = {
    'Angry': '😠',
    'Happy': '🙂',
    'Sad': '😔',
    'Afraid': '😶',
    'Jealous': '😒',
  }

  return (
    <div className='flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16'>
      <div className='flex  flex-col sm:gap-2  items-center justify-center bg-zinc-50 rounded-lg p-4 gap-4'>
         <p className={'text-base sm:text-lg md:text-xl text-center w-full text-cyan-600 ' }>{"\" " + randomVerse(dashVerses) + " \""}</p> 
      </div>
      <h4 className={'text-5xl sm:text-6xl md:text-7xl text-center ' + fugaz.className}>
        How do you <span className='textGradient'>feel</span> today?
      </h4>
      <div className='flex items-stretch justify-center flex-wrap gap-4'>
      
        {Object.keys(moods).map((mood, moodIndex) => {
          
          return (
            <Link  
          className=""
          key={moodIndex}
          href={{
            pathname: "/dashboard/verses",
            query:  { 
              myMood: mood 
            },
          }}>
              <button className='p-4 px-5 rounded-2xl purpleShadow duration-200 text-center bg-zinc-100  hover:bg-zinc-200 flex flex-col gap-2 items-center flex-1' key={moodIndex}>
               
                  <p className='text-4xl sm:text-5xl md:text-6xl'>{moods[mood]}</p>
                  <p className={'text-cyan-600 text-xs sm:text-sm md:text-base ' + fugaz.className}>{mood}</p>
                
              </button>
                          
              </Link>
          )
          
        })}
       
      </div>
    </div>
  )
}
