'use client'
import { useState, useEffect } from 'react'

// cms
import { client } from '../libs/client'

// type
interface Tag {
  id: string
  tag: string
}

function useTagData() {
  const [tags, setTags] = useState<Tag[]>([])

  useEffect(() => {
    // タグを取得
    client
      .get({ endpoint: 'tag' })
      .then((data) => setTags(data.contents))
      .catch((error) => console.error('Error fetching tags:', error))
  }, [])
  return tags
}

export default useTagData
