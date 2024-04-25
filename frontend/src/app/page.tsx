import React from 'react'
import Link from 'next/link'

// scss
import styles from '../styles/page.module.scss'

// components
import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'
import TopLayout from '@/components/templates/TopLayout'
import Contact from '@/components/organisms/Contact'
import LinkArea from '@/components/organisms/LinkArea'
import Footer from '@/components/organisms/Footer'
import ArticleCard from '@/components/molecules/ArticleCard'

export default function Home({ blog }: any) {
  return (
    <main className={styles.main}>
      <Header />
      <Hero jaTitle='# ブログ' enTitle='BLOG' />
      <TopLayout>
        <Link href='/blog'>記事一覧へ</Link>
        <ArticleCard
          id={1}
          link='/blogs/articles/1'
          imgLink='/images/sample/sample2.JPG'
          makeDate='2024-04-01'
          updateDate='2024-04-21'
          title='Lambda関数(+Docker)でPythonのFastAPIを動かしてみよう'
          tags={['AWS', 'Docker']}
          desc='Lambda関数の作成方法を確認し、Lambda関数でDockerを利用する手順などを公開しました'
        />
        <ArticleCard
          id={2}
          link='/blogs/articles/1'
          imgLink='/images/sample/sample1.JPG'
          makeDate='2024-04-01'
          updateDate='2024-04-21'
          title='AWS入門】驚くほど簡単！EventBridgeスケジューラによるEC2の自動起動/停止'
          tags={['AWS', 'EC2', '入門']}
          desc='Lambda関数の作成方法を確認し、Lambda関数でDockerを利用する手順などを公開しました'
        />
        <ArticleCard
          id={3}
          link='/blogs/articles/1'
          imgLink='/images/sample/sample.JPG'
          makeDate='2024-04-01'
          updateDate='2024-04-21'
          title='AWSのEC2(Amazon Linux 2023)の作成からFastAPI起動まで'
          tags={['AWS', 'Linux', 'FastAPI']}
          desc='Lambda関数の作成方法を確認し、Lambda関数でDockerを利用する手順などを公開しました'
        />
        <ArticleCard
          id={4}
          link='/blogs/articles/1'
          imgLink='/images/sample/sample3.JPG'
          makeDate='2024-04-01'
          updateDate='2024-04-21'
          title='Laravel Reverbって何？WebSocketでリアルタイム？Chat?'
          tags={['Larabel', 'Reverb']}
          desc='Lambda関数の作成方法を確認し、Lambda関数でDockerを利用する手順などを公開しました'
        />
        <ArticleCard
          id={1}
          link='/blogs/articles/1'
          imgLink='/images/sample/sample2.JPG'
          makeDate='2024-04-01'
          updateDate='2024-04-21'
          title='Lambda関数(+Docker)でPythonのFastAPIを動かしてみよう'
          tags={['AWS', 'Docker']}
          desc='Lambda関数の作成方法を確認し、Lambda関数でDockerを利用する手順などを公開しました'
        />
        <ArticleCard
          id={2}
          link='/blogs/articles/1'
          imgLink='/images/sample/sample1.JPG'
          makeDate='2024-04-01'
          updateDate='2024-04-21'
          title='AWS入門】驚くほど簡単！EventBridgeスケジューラによるEC2の自動起動/停止'
          tags={['AWS', 'EC2', '入門']}
          desc='Lambda関数の作成方法を確認し、Lambda関数でDockerを利用する手順などを公開しました'
        />
        <ArticleCard
          id={3}
          link='/blogs/articles/1'
          imgLink='/images/sample/sample3.JPG'
          makeDate='2024-04-01'
          updateDate='2024-04-21'
          title='AWSのEC2(Amazon Linux 2023)の作成からFastAPI起動まで'
          tags={['AWS', 'Linux', 'FastAPI']}
          desc='Lambda関数の作成方法を確認し、Lambda関数でDockerを利用する手順などを公開しました'
        />
        <ArticleCard
          id={4}
          link='/blogs/articles/1'
          imgLink='/images/sample/sample.JPG'
          makeDate='2024-04-01'
          updateDate='2024-04-21'
          title='Laravel Reverbって何？WebSocketでリアルタイム？Chat?'
          tags={['Larabel', 'Reverb']}
          desc='Lambda関数の作成方法を確認し、Lambda関数でDockerを利用する手順などを公開しました'
        />
        <ArticleCard
          id={3}
          link='/blogs/articles/1'
          imgLink='/images/sample/sample3.JPG'
          makeDate='2024-04-01'
          updateDate='2024-04-21'
          title='AWSのEC2(Amazon Linux 2023)の作成からFastAPI起動まで'
          tags={['AWS', 'Linux', 'FastAPI']}
          desc='Lambda関数の作成方法を確認し、Lambda関数でDockerを利用する手順などを公開しました'
        />
        <ArticleCard
          id={4}
          link='/blogs/articles/1'
          imgLink='/images/sample/sample.JPG'
          makeDate='2024-04-01'
          updateDate='2024-04-21'
          title='Laravel Reverbって何？WebSocketでリアルタイム？Chat?'
          tags={['Larabel', 'Reverb']}
          desc='Lambda関数の作成方法を確認し、Lambda関数でDockerを利用する手順などを公開しました'
        />
      </TopLayout>
      <Contact />
      <LinkArea />
      <Footer />
    </main>
  )
}
