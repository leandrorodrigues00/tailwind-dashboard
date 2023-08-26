import { Sidebar } from '@/components/sidebar'

import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Untitled UI',
  description: 'form created with tailwind css',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="antialiased" lang="en">
      <body className={inter.className}>
        <div className="min-h-screen dark:bg-zinc-900 xl:grid xl:grid-cols-app">
          <Sidebar />
          <main className="max-w-[100vw] px-4 pb-12 pt-24 xl:col-start-2 xl:px-8 xl:pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
