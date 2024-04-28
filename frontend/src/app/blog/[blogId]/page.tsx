import React from 'react'
import Link from 'next/link'

// components
import ArticleLayout from '@/components/templates/ArticleLayout'
import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'
import Footer from '@/components/organisms/Footer'
import Contact from '@/components/organisms/Contact'
import LinkArea from '@/components/organisms/LinkArea'
import Body from '@/app/blog/[blogId]/components/Body'

// cms
// import { client } from '../../../libs/microcms'

export default function BlogDetail() {
  return (
    <>
      <Header />
      <Hero jaTitle='# ブログ' enTitle='BLOG' />
      <ArticleLayout id={1}>
        <Body />
        <Link href='/'>記事一覧へ</Link>
      </ArticleLayout>
      <Contact />
      <LinkArea />
      <Footer />
    </>
  )
}
