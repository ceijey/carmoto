import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { FavoriteProvider } from './context/FavoriteContext'

const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
})  

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <FavoriteProvider>
          {children}
        </FavoriteProvider>
      </body>
    </html>
  )
}
