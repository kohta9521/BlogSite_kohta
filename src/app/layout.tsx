import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kohta Blog Site | テックブログ ',
  description: '「Kohtaのテックブログ」へようこそ！ここでは、最新のテクノロジートレンド、プログラミングのヒント、そしてソフトウェア開発のベストプラクティスについて、経験豊富なエンジニアであるKohtaが深く掘り下げていきます。初心者から上級者まで、すべてのレベルの開発者に役立つ情報を提供します。私たちは、最新の技術ニュース、詳細なチュートリアル、業界のインサイト、そして実践的なプロジェクトのアイデアを共有しています。プログラミングの世界でのあなたの旅をサポートし、技術的なスキルを次のレベルへと引き上げるための情報源となることを目指しています。Kohtaと一緒に、テクノロジーの可能性を最大限に引き出しましょう！',
  keywords: 'Kohta, テックブログ, プログラミング, ソフトウェア開発, エンジニア, 技術ニュース, チュートリアル, 業界のインサイト, プロジェクトのアイデア, 技術的なスキル, テクノロジー',
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
