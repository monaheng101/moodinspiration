import React from 'react'
import { Fugaz_One } from "next/font/google";

const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] })


export default function Button(props) {
const { text, dark, full } = props

  return (
    <button className={'rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-teal-600 ' + (dark ? ' text-white bg-teal-600 border-teal-600 ' : ' text-teal-600 ') + (full ? ' grid place-items-center w-full ' : ' ' ) }>
      <p className={'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ' + fugaz.className}>{text}</p>
      
    </button>
  )
}
