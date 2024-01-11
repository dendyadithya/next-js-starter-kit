'use client'

import { ThemeProvider } from '@/providers/ThemeProvider'
import React from 'react'

import Navbar from './components/navbar'
import Sidebar from './components/sidebar'

export default function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <main className="container mx-auto flex h-screen max-h-screen w-full flex-col items-center pb-4 pt-4">
        <Navbar />
        <div className="grid h-full w-full grid-cols-5">
          <Sidebar />
          <div className="col-span-4 pl-6 pr-1 pt-2">{children}</div>
        </div>
      </main>
    </ThemeProvider>
  )
}
