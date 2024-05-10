import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.scss'
import Copyright from '@/components/atoms/Copyright'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kohta Tech Blog | 河内光太テックブログ',
  description:
    '河内光太の技術ブログです。エンジニアとしての日々の勉強の内容や成果、そしてガジェットなどを紹介しています。気軽に見ていってください！',
  keywords:
    '大学生, エンジニア, ポートフォリオ, プログラミング, IT業界, 開発者, フリーランス, キャリア, 技術スタック, プロジェクト, ブログ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body className={inter.className}>{children}</body>
      <Copyright />
    </html>
  )
}
