import Link from 'next/link'
import { client } from '../../../libs/microcms'
import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

async function getBlog(blogId: string) {
  try {
    const response = await client.get({
      endpoint: 'blog',
      contentId: blogId,
      customRequestInit: {
        next: {
          revalidate: 0,
        },
      },
    })

    return NextResponse.json({
      data: response ?? null,
      error: null,
    })
  } catch (error: any) {
    console.error('エラーが発生しました', error)
    redirect('/404')
  }
}

type Blog = {
  params: {
    blogId: string
  }
}

export default async function BlogDetail({ params }: Blog) {
  const response = await getBlog(params.blogId)
  const { data, error } = await response.json()

  // HTMLが安全であることを確認した上で挿入する
  const createMarkup = () => {
    return { __html: data.content }
  }

  return (
    <main>
      <h1>ここはブログ詳ページです</h1>
      <h2>{data.title}</h2>
      <p>作成日時: {data.createdAt}</p>
      <p>更新日時: {data.updatedAt}</p>
      <div dangerouslySetInnerHTML={{ __html: data.content || '' }} />
      <Link href='/blog'>記事一覧へ</Link>
    </main>
  )
}
