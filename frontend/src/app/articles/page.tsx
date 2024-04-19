import React from 'react'

// scss
import styles from './Article.module.scss'

// components
import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'
import ArticleLayout from '@/components/templates/ArticleLayout'
import Contact from '@/components/organisms/Contact'
import LinkArea from '@/components/organisms/LinkArea'
import Footer from '@/components/organisms/Footer'

// markdown
import ReactMarkdown from 'react-markdown'

const markdownString = `
# はじめに

記事をご覧いただきありがとうございます。
現在私は大学に通いながら日々プログラミングの勉強を進めています。
主に領域としましてはフロントエンドをメインに勉強をしてきました。そこでふと疑問に思った部分があります。

**それは「npm」と「npx」の違いについてです。**

主にlocalhostを立てる際に使用していましたが突然こんがらがってしまいこれは一度しっかりと理解し直すべきと感じこの記事を書くに至りました。

# 対象の読者
* 一度でも「npm」「npx」コマンドを使用したことがある方
* 日々開発でlocalhostを立てている方
* テンプレとして考えておりしっかりと理解し直したい方
* 一度でも私と同じように「npm」と「npx」でこんがらがったことがある方

# 目次
1.そもそも「npx」「npm」とは？
2.利用方法・タイミング
3.似ているもの ~yarn編~
4.最後に



`

const Articles = () => {
  return (
    <div className={styles.blog}>
      <Header />
      <Hero jaTitle='# ブログ' enTitle='BLOG' />
      <ArticleLayout id={1}>
        <ReactMarkdown>{markdownString}</ReactMarkdown>;
      </ArticleLayout>
      <Contact />
      <LinkArea />
      <Footer />
    </div>
  )
}

export default Articles
