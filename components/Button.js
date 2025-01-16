import React from 'react'

export default function Button(props) {
const { text } = props

  return (   
    <button  className='rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 border-solid border-cyan-600 text-cyan-600 '>
      <p className={'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ' }>{text}</p> 
    </button>
  )
}
