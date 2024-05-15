'use client'
import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

const useTableOfContents = () => {
  const [headings, setHeadings] = useState<Heading[]>([])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
    const headingList = elements.map((elem) => ({
      id: elem.id,
      text: elem.textContent || '',
      level: parseInt(elem.tagName.replace('H', ''), 10),
    }))
    setHeadings(headingList)
  }, [])

  return headings
}

export default useTableOfContents
