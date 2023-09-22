import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Article } from '@/types'

type ArticleListProps = {
  articles: Article[]
}

function ArticleList({ articles }: ArticleListProps) {
  return (
    <div>
      {articles.map((article) => (
        <article key={article.id} className="shadow my-4 flex flex-col">
          <Link href={`articles/${article.id}`} className="hover:opacity-75">
            <Image
              src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
              alt="unsplashImg"
              width={1280}
              height={300}
            />
          </Link>
          <div className="bg-white flex flex-col justify-start p-6">
            <Link href="#" className="text-blue-700 py-4 font-bold">
              Technology
            </Link>
            <Link
              href={`articles/${article.id}`}
              className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
            >
              {article.title}
            </Link>
            <p className="text-sm pb-3 text-slate-900">{article.createdAt}</p>
            <a href={`articles/${article.id}`} className="text-slate-900 pb-6">
              {article.content}
            </a>
            <Link
              href={`articles/${article.id}`}
              className="text-pink-800 hover:text-black"
            >
              続きを読む
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ArticleList
