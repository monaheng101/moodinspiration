import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";

const opensans = Open_Sans({ subsets: ['latin'] })
const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] })


export const metadata = {
  title: "Mood Inspiration",
  description: "Track your mood to get inspired everyday of the year",
};

export default function RootLayout({ children }) {

  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={'/'}>
        <h1 className={'text-base sm:text-lg textGradient ' + fugaz.className}>Mood Inspiration</h1>
      </Link>
      <div className="flex items-center justify-between">PLACEHOLDER CTA || STATS</div>
    </header>
  )
  const footer = (
    <footer className="p-4 sm:p-8 grip place-items-center">
      <p className={'text-teal-400 text-xs sm:text-sm ' + fugaz.className}>© Copyright 2024 M.N</p>
      
    </footer>
  )

  return (
    <html lang="en">
      <AuthProvider>
        <body
        className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ' + opensans.className}
        >
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
