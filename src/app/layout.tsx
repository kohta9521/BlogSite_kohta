import Header from './Header'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kohta Blog Site',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="container mx-auto bg-slate-700 text-slate-50">
        <Header />
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  )
}
