import React from 'react'
import { Metadata } from 'next'
import './globals.css'
 
export const metadata: Metadata = {
  title: `Coffuel`,
  description: ''
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
            <link rel="icon" href="/image/logo.png" />
        </head>
      <body>{children}</body>
    </html>
  )
}