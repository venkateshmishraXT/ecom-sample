import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import React from 'react'
import { relative } from 'path'
export const metadata: Metadata = {
  title: 'IMSC',
  description: 'Industrial metal supply company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='relative'>
        <Navbar />
        {children}
        <Footer />
      </div>
      </body>
    </html>
  )
}
