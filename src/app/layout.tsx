import '../styles/globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kohta Blog Site | エンジニアブログ',
  description: 'こちらのサイトではkohtaのBlogをご覧いただけます。内容はプログラミングの学習内容からテック系のガジェット紹介などがあります。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
