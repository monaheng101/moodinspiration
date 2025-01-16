import React from 'react'
import { Fugaz_One } from "next/font/google";


const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] })


export default function NavItem(props) {

    const {text} = props
    return (
        <h1 className={'text-base sm:text-lg textGradient ' + fugaz.className}>
            {text}
        </h1>
    )
}
