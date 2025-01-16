import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavItem from "@/components/NavItem";

const opensans = Open_Sans({ subsets: ['latin'] })
const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] })


export const metadata = {
  title: "Bible Inspiration",
  description: "Select your current mood to learn a new Bible verse. Bible Inspiration recommends you a bible verse everytime you feel sadness, fearful, happiness, anger, jealousy, weakness, strength, motivation and depression.",
};

export default function RootLayout({ children }) {

  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={'/'}>
        <NavItem text="Bible Inspiration" />
      </Link>  
      <NavItem text={(new Date()).toDateString()}/>
    </header>
  )
  const footer = (
    <footer className="p-4 sm:p-8 mt-5 place-items-center">
      <p className={'text-cyan-600 text-xs sm:text-sm ' + fugaz.className}>© Copyright 2025 M.Ntai</p>
      
    </footer>
  )

  return (
    <html lang="en">
        <body
        className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ' + opensans.className}
        >
          {header}
          {children}
          {footer}
        </body>
    </html>
  );
}
