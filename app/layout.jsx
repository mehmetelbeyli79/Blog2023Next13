import '../styles/global.css'
import { Inter } from '@next/font/google';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
